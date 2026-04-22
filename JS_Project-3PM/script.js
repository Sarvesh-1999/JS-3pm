const usernameInput = document.getElementById("username");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm-password");
const signupFormElement = document.getElementById("signup-form");

signupFormElement.addEventListener("submit", async (e) => {
  e.preventDefault(); // stops refresh
  console.log("Form Submitted");

  let newUser = {
    username: usernameInput.value.trim(),
    email: emailInput.value.trim().toLowerCase(),
    password: passwordInput.value.trim(),
    confirmPassword: confirmPasswordInput.value.trim(),
  };

  console.log(newUser);

  if (newUser.password !== newUser.confirmPassword) {
    alert("Password mismatch ❌");
    return;
  }

  //! sending data to backend using fetch() method
  let resp = await fetch("http://localhost:9000/users", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(newUser),
  });

  if (resp) {
    console.log("Done");
    window.location.href = "/Pages/Login.html";
  }
});
