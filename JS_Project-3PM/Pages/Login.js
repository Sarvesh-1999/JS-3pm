const loginFormEle = document.getElementById("login-form");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

loginFormEle.addEventListener("submit", async (e) => {
  e.preventDefault(); // stops refresh
  let loginUser = {
    email: emailInput.value.trim().toLowerCase(),
    password: passwordInput.value.trim(),
  };

  let signupUsers = await getSignupUsers(); // to get all users
  let authenticatedUser = checkIsAuthUser(loginUser, signupUsers); // to check auth user

  if (authenticatedUser) {
    alert("Login Success ✅");
    window.location.href = "/Pages/Dashboard.html"; // navigate to Dashboard
    localStorage.setItem("authuser", JSON.stringify(authenticatedUser));
  }
});

// helper function to get all signup users
async function getSignupUsers() {
  try {
    let resp = await fetch("http://localhost:9000/users");
    let data = await resp.json();
    return data;
  } catch (error) {
    console.log(error);
    console.log("Unable to get all signup users");
  }
}

// helper function to check is Auth user
function checkIsAuthUser(loginUser, allUsers) {
  let authUser = allUsers.find((user) => {
    return (
      user.email === loginUser.email && user.password === loginUser.password
    );
  });

  if (authUser) {
    return authUser;
  }

  alert("Invalid Credential ❌");
  return null;
}
