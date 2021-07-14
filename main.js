/* variables*/
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

/*empty form*/
function validateForm() {
  let x = document.forms["survey-form"]["name"].value; 
  /* The forms read-only property of the Document interface returns an HTMLCollection listing all the <form> elements contained in the document.*/

  let y = document.forms["survey-form"]["lname"].value;

  let z = document.forms["survey-form"]["email"].value;

  if (x == "" || x == null) {
    alertify.alert('Name', 'Name is missing!', function(){ alertify.success('Ok'); }); /* https://alertifyjs.com/alert.html taken from this page */
    return false;
  }

  if (y == "" || y == null) {
    alertify.alert("Last name is missing!");
    return false;
  }

 if (z == "" || z == null) {
    alertify.alert("Email is missing!");
    return false;
  
  }
}

/*input validation*/
function validateInput(){
  if(firstName.value.trim()===""){ /*trim() - removes whitespace from both sides of a string, does not change the original string.*/
    let parent = firstName.parentElement; 
    let errorMessage = parent.querySelector("small"); /*selects small tag from the parent element */
    errorMessage.style.visibility="visible"; /* changes visibility of small tag */
    errorMessage.innerText="First name cannot be empty!";
    window.scrollTo({ top: 0, behavior: `smooth` });  /*smooth scrolling to top of the web page */
  } else {
      let parent = firstName.parentElement; 
      let errorMessage = parent.querySelector("small"); 
      errorMessage.style.visibility="inherit"; 
      errorMessage.innerText="";
  }
}

document.querySelector("button").addEventListener("click", (event)=>{
    event.preventDefault(); 
    /*The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.*/
    validateInput(); 
  });



/*email*/

email.addEventListener("input", function (event) {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("'@' sign is missing!");
  } else {
    email.setCustomValidity("");
  }
});

