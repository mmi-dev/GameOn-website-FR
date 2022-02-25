// form variables

var form  = document.getElementById("reserve");

var firstName = document.getElementById("first");
var lastName = document.getElementById("last");
var email = document.getElementById("email");
var birthdate = document.getElementById("birthdate");
var quantity = document.getElementById("quantity");
var radioContainer = document.getElementById("radio");
var locationName = document.getElementsByName("location");
var conditionsAgreement = document.getElementById("checkbox1");
var eventsInfo = document.getElementById("checkbox2");
var submitForm = document.getElementById("submitBtn");

var errorAlert = document.getElementById("alert");
var alertBase = errorAlert.innerHTML;

var validation = ""; // validation state

// error messages

var firstNameMsg1 = "Vous devez entrer votre prénom.";
var firstNameMsg2 = "Le prénom doit comporter au minimum 2 caractères";

var lastNameMsg1 = "vous devez entrer votre nom";
var lastNameMsg2 = "Le nom doit comporter au minimum 2 caractères";

var emailMsg1 = "Vous devez entrer votre email."; // field not required for the moment
var emailMsg2 = "L'email n'est pas valide";

var birthdateMsg1 = "Vous devez entrer votre date de naissance."; // field not required for the moment
var birthdateMsg2 = "La date de naissance n'est pas valide.";

var quantityMsg1 = "Vous devez enter un nombre."; // field not required for the moment
var quantityMsg2 = "le nombre doit être compris entre 0 et 99";

var locationMsg = "vous devez selectionner un tournoi";

// input validity test
function inputValidation (e, msg1, msg2){
    if(e.value == ""){
        if(e.required == true){
            e.parentElement.setAttribute("data-error-visible","true");
            e.parentElement.setAttribute("data-error",msg1);
            validation = false;
        }
        else{
            e.parentElement.removeAttribute("data-error-visible");
            e.parentElement.removeAttribute("data-error");
        }
    }
    else if(e.validity.valid !== true){
        e.parentElement.setAttribute("data-error-visible","true");
        e.parentElement.setAttribute("data-error",msg2);
        validation = false;
    }
    else{
        e.parentElement.removeAttribute("data-error-visible");
        e.parentElement.removeAttribute("data-error");
    }
};

// first name validation on change
firstName.addEventListener('change', function(){
    inputValidation(firstName, firstNameMsg1, firstNameMsg2);
});

// last name validation on change
lastName.addEventListener('change', function(){
    inputValidation(lastName, lastNameMsg1, lastNameMsg2);
});

// email validation on change
email.addEventListener('change', function(){
    inputValidation(email, emailMsg1, emailMsg2);
});

// birthdate validation on change
birthdate.addEventListener('change', function(){
    inputValidation(birthdate, birthdateMsg1, birthdateMsg2);
});

// number name validation on change
quantity.addEventListener('change', function(){
    inputValidation(quantity, quantityMsg1, quantityMsg2);
});

// location name validation
function radioChecked (){
    var radio = "";
    for (var i = 0, length = locationName.length; i < length; i++) {
        if (locationName[i].checked) {
          // set radio states to checked
          radio = "checked";
          // only one radio can be logically checked, don't check the rest
          break;
        }
      }
    if(radio !== "checked"){
        radioContainer.setAttribute("data-error-visible","true");
        radioContainer.setAttribute("data-error","vous devez selectionner un tournoi");
        validation = false;
    }
    else{
        radioContainer.removeAttribute("data-error-visible");
        radioContainer.removeAttribute("data-error");
    }
};

// form validation
function validate(){
    // validation state reset form
    validation=true;
    // check fields
    radioChecked();
    inputValidation(firstName, firstNameMsg1, firstNameMsg2);
    inputValidation(lastName, lastNameMsg1, lastNameMsg2);
    inputValidation(email, emailMsg1, emailMsg2);
    inputValidation(birthdate, birthdateMsg1, birthdateMsg2);
    inputValidation(quantity, quantityMsg1, quantityMsg2);
    // errors control
    if(validation == false){
        errorAlert.innerHTML = "tous les champs doivent être valides";
        errorAlert.classList.add("alert-show");
        return false;
    }
    else{
        // form submit
        document.getElementById("submited").value = "success";
        return true;
    }
  };

// suppress & reset error alert
form.addEventListener('click', function(){
    errorAlert.classList.remove("alert-show");
    errorAlert.innerHTML = alertBase;
});