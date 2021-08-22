
/*Variables*/
const title = document.getElementById('title');
const surveyForm = document.getElementById('survey-form');
const description = document.getElementById('description');
const errorElement = document.getElementById('error');
const firstName = document.getElementById('name');
const lastName = document.getElementById('lname');
const age = document.getElementById('number');
const email = document.getElementById('email');
const dropdown = document.getElementById('dropdown');

const radio = document.getElementById('radio');
const radio1 = document.getElementById('radio1');
const radio2 = document.getElementById('radio2');



const checkbox = document.getElementById('checkbox');
const checkbox = document.getElementById('checkbox');
const checkbox = document.getElementById('checkbox');
const checkbox = document.getElementById('checkbox');
const checkbox = document.getElementById('checkbox');
const checkbox = document.getElementById('checkbox');
const checkbox = document.getElementById('checkbox');
const checkbox = document.getElementById('checkbox');


const textarea = document.getElementById('textarea');
const submit = document.getElementById('submit');

const confirmed = validateInput();



/*input validation function*/
function validateInput(){

  
  /*first name validation */
  if(firstName.value.trim()===""){
    onError(firstName, "First Name cannot be empty!");
    window.scrollTo({top: 0, behavior: 'smooth'});

  } else if(firstName.value.length < 2){
    onError(firstName, "Your name is too short!")
    window.scrollTo({top: 0, behavior: 'smooth'});

  } else if(firstName.value.length > 10){
    onError(firstName, "Your name is too long!")
    window.scrollTo({top: 0, behavior: 'smooth'});
  
  } else {
     onSuccess(firstName, '&#10004'); 
  }



  /*last name validation */
  if(lastName.value.trim()===""){
    onError(lastName, "Last Name cannot be empty!");
    lastName.scrollIntoView();

  } else if(lastName.value.length < 2){
    onError(lastName, "Your last name is too short!")
    lastName.scrollIntoView();

  } else if(lastName.value.length > 10){
    onError(lastName, "Your last name is too long!")
    lastName.scrollIntoView();
  
  } else { 
    onSuccess(lastName, '&#10004');
  }


  /*email validation */
   if(email.value.trim()===""){
      onError(email, "Your e-mail is missing!");
      email.scrollIntoView();
    } else {
      if(!isValidEmail(email.value.trim())){
        onError(email,"Email is not valid");
        email.scrollIntoView();
    } else {
        onSuccess(email, '&#10004'); 
    }
  }



  /*age validation */
  if(age.value.trim()===""){
    onError(age, "Write your age here!"); 
   window.scrollTo({top: 0, behavior: 'smooth'});

  } else if (age.value < 18){
    onError(number, "You are to young!");
    window.scrollTo({top: 0, behavior: 'smooth'});

  } else if (age.value > 60){
    onError(number, "You are too old!");
    window.scrollTo({top: 0, behavior: 'smooth'});

  } else {
    onSuccess(number, '&#10004');
  }

 
  /*radio button validation*/

  if(radio.checked){
    onSuccess(radio, '&#10004');
  
  } else if (radio1.checked){
    onSuccess(radio1, '&#10004');

  } else if (radio2.checked){
    onSuccess(radio2, '&#10004');
  } else {
    onError(radio, "Choose your answer!"); 
    window.scrollTo({top: 0, behavior: 'smooth'});
    
  }

  /*checkbox validation*/

  if(this.checked = false){
    onError(checkbox, "Select a option!");
    window.scrollIntoView();
    
  } else {
    onSuccess(checkbox, '&#10004');
    
  }

  

}


document.querySelector("button").addEventListener("click", (event)=>{
    event.preventDefault(); 
    validateInput(); 
  }); 



/*Succes function*/
function onSuccess(input, symbol){ 

    let parent = input.parentElement; 
    let errorMessage = parent.querySelector("small"); 
    errorMessage.style.visibility= "visible"; 
    errorMessage.innerHTML = symbol; 
    parent.classList.remove("error");
    parent.classList.add("success");

  }



  /* Error function */
function onError(input, message){

    let parent = input.parentElement; 
    let errorMessage = parent.querySelector("small"); 
    errorMessage.style.visibility="visible"; 
    errorMessage.innerText = message;
    parent.classList.add("error");
    parent.classList.remove("success");  

}

/* Valid e-mail function */
function isValidEmail(email){

  return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);

}


/* Check letters function */
function allLetter(input) {

  var letters = /^[a-z]*$/i;
  if (!input.value.match(letters)) {
      alert('Please input letters only');
  }

}



/*submit confirmation function*/
function confirmSubmit() {
  if (confirmed === true){
    confirm("Are you sure to continue?")
    location.replace("submit_confirmation.html");}
  else{
    alert("Some parts of form are empty!")
  return false ;}
}

/*validate form

function confirmSubmit() {

  var confirmed = validateInput();
  if(confirmed == !valid) {
    alert('Please correct the errors in the form!');
    return false;
}
else {
    return confirm('Do you really want to submit the form?');
    location.replace("submit_confirmation.html");
}

/*
https://stackoverflow.com/questions/6515502/javascript-form-submit-confirm-or-cancel-submission-dialog-box

*/

