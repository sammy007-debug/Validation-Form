const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordCheck = document.getElementById("passwordCheck");


form.addEventListener("submit", (event)=>{
  event.preventDefault();
  
  inspect();
  
});


function inspect(){
  //The the values from the inputs
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const passwordCheckValue = passwordCheck.value.trim();
  
  if (usernameValue == ""){
    //display error
    //add error class
    setErrorFor(username, "Username can't be blank");
    
    
  } else  {
    //add success class
    setSuccessFor(username);
    
    
  }
  
  if (emailValue == ""){
    
    setErrorFor(email, "Email can't be blank");
    
    
  }else if (!emailverification(emailValue)) {
    setErrorFor(email, "Email is not valid");
    
  } else {
    setSuccessFor(email);
  }
  
  
  if (passwordValue == ""){
    
    setErrorFor(password, "Password can't be blank");
   
    
  }else if(passwordValue.length <  7) {
    setErrorFor(password, "Password must contain atleast 8 characters");
    
    
  }  else {
    setSuccessFor(password);
  }
  
  
  if (passwordCheckValue == "" ){
    
    setErrorFor(passwordCheck, "Password Check can't be blank");
    
    
  }else if(passwordCheckValue !== passwordValue){
    setErrorFor(passwordCheck, "Password does not match!");
    
    
  } else {
    setSuccessFor(passwordCheck);
    
  }
  
  
  if (usernameValue === "" || emailValue === "" || passwordValue === "" || passwordCheckValue === "" || passwordCheckValue !== passwordValue || passwordValue.length <  7 || (!emailverification(emailValue) ) ) {
    //display error
    //add error class
    isValid = false;
    
    
  } else  {
    //add success class
    isValid = true;
  
 
  }
  
  if (isValid){
    alert("Form Submittion Completed");
  }
  
  
 
 
  
  
  
  

}



function setErrorFor (input, message) {
  const formControl = input.parentElement //.form-control
  const small = formControl.querySelector("small");
  
  
  
  //add error message inside small 
  small.innerText = message;
  
  //add error class
  
  formControl.className = "form-control error";
                                          
                                          
}

function setSuccessFor(input, message) {
  
  const formControl = input.parentElement //.form-control
  
  formControl.className = "form-control success";
  
}


function emailverification(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}



