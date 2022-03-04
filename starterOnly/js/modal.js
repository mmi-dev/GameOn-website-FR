// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const modalCloseBtn = document.querySelectorAll(".closeMsg");
let successStatus =  new URLSearchParams(document.location.search).get("submited");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal event
modalCloseBtn.forEach((btn) => btn.addEventListener("click", closeModal));

// close modal form
function closeModal() {
  modalbg.style.display = "none";
  if(successStatus ==  "success"){
    // restore modal form
    document.getElementById("confirmation").style.visibility = "hidden";
    form.style.opacity = 1;
    form.style.visibility = "visible";
    // refresh window
    window.location.href="index.html";
  }
}

// confirmation message on successfull submit
function confirmationModal() {
  // hidde form
  form.style.opacity = 0;
  form.style.visibility = "hidden";
  // confirmation message show
  document.getElementById("confirmation").style.visibility = "visible";
  
}

// control submit status on load to show confirmation message
window.onload=function(){
  if(successStatus == "success"){
    confirmationModal();
    launchModal();
  }
};