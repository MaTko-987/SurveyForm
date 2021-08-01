
/*variables*/
const title = document.getElementById('title');
const surveyForm = document.getElementById('survey-form');
const description = document.getElementById('description');
const errorElement = document.getElementById('error');
const firstName = document.getElementById('name');
const lastName = document.getElementById('lname');
const age = document.getElementById('age');
const email = document.getElementById('email');
const role = document.getElementById('dropdown');
const radio = document.getElementById('radio');
const checkbox = document.getElementById('checkbox');
const textarea = document.getElementById('textarea');
const submit = document.getElementById('submit');



/*input validation*/
function validateInput(){

  
  if(firstName.value.trim()===""){
    onError(firstName, "First Name cannot be empty!");
    window.scrollTo({ top: 0, behavior: `smooth` }); 
  } else {
     onSuccess(firstName, "Very good!");
  }

  if(lastName.value.trim()===""){
    onError(lastName, "Last Name cannot be empty!");
  } else { 
    onSuccess(lastName, "Nice!");
  }

   if(email.value.trim()===""){
    onError(email, "Your e-mail is missing!");
  } else {

    if(!isValidEmail(email.value.trim())){
      onError(email,"Email is not valid");
  } else {
      onSuccess(email, "Great email!");
  }
}

  if(number.value.trim()===""){
    onError(number, "Write your age here!"); 
  }else {
    onSuccess(number, "That's a nice number!");
  }

}




document.querySelector("button").addEventListener("click", (event)=>{
    event.preventDefault(); 
    validateInput(); 
  }); 


function onSuccess(input, message){

    let parent = input.parentElement; 
    let errorMessage = parent.querySelector("small"); 
    errorMessage.style.visibility= "visible"; 
    errorMessage.style.fontStyle = "italic"; 
    errorMessage.style.fontFamily = "monospace";
    errorMessage.innerText = message;
    parent.classList.remove("error");
    parent.classList.add("success");
  }

function onError(input, message){

    let parent = input.parentElement; 
    let errorMessage = parent.querySelector("small"); 
    errorMessage.style.visibility="visible"; 
    errorMessage.innerText = message;
    parent.classList.add("error");
    parent.classList.remove("success");
      
}

function isValidEmail(email){
  return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}



