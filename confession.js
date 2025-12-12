const passInput = document.getElementById("confession-password");
const passBtn = document.getElementById("confession-btn");
const errMsg = document.getElementById("confession-error");
const content = document.getElementById("confession-content");

// change this to whatever secret you want
const SECRET_PASSWORD = "it's 12 december";

passBtn.addEventListener("click", () => {
  const value = passInput.value.trim();
  if (value === SECRET_PASSWORD) {
    errMsg.textContent = "";
    content.style.display = "block";
    document.getElementById("confession-lock").style.display = "none";
  } else {
    errMsg.textContent = "Wrong password. Try again 🤐";
  }
});