const password = document.getElementById("password");
const copyBtn = document.getElementById("copy-btn");
const generateBtn = document.getElementById("generate-btn");

generateBtn.addEventListener("click", function () {
  let password = "";
  const length = 8;
  const characters =
    "ABCDEFGHJIKLMNOPQRESTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()";

  for (let i = 0; i <= length; i++) {
    const randomNumber = Math.floor(Math.random() * characters.length);
    password += characters.substring(randomNumber, randomNumber + 1);
  }
  document.getElementById("password").value = password;

  copyBtn.addEventListener("click", function () {
    var copyText = document.getElementById("password");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);

    alert("Copied!");
  });
});
