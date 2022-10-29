/* ------- Const ------- */
const pass = document.getElementById("pass");
const btnChk = document.getElementById("btnChk");
const eye = document.getElementById("eye");

/* ------ Function ------ */

const showPassword = () => {
  if (btnChk.checked) {
    pass.type = "text";
    eye.classList.remove("gg-eye")
    eye.classList.add("gg-eye-alt")
  } else {
    pass.type = "password";
    eye.classList.remove("gg-eye-alt")
    eye.classList.add("gg-eye")
  }
};
