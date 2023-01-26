const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirm = document.getElementById("password-confirm");

// show success.
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = "form__div success";
}

// show error message.
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = "form__div error";
    const small = formControl.querySelector("small");
    small.innerText = message;
}

// Email validation check
function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    if (re.test(input.value.trim())) 
    {
        showSuccess(input);
    } 

    else 
    {
        showError(input, "Email not valid");
    }
}

// Get name of field
function getFieldName(input) {
    return input.name;
}

// Check fields
function checkRequired(inputArr) {
    inputArr.forEach(function (input) 
    {
        if (input.value.trim() === "") 
        {
            showError(input, `${getFieldName(input)} This Password Field is required`);
        } 

        else 
        {
            showSuccess(input);
        }
    });
}
// Check length
function checkLength(input, min, max) 
{
    if (input.value.length < min) 
    {
        showError(input, `${getFieldName(input)} Must be atleast ${min} characters`);
    } else if (input.value.length > max) 
    
    {
        showError(input, `${getFieldName(input)} Must be less than ${max} characters`);
    } 

    else 
    {
        showSuccess(input);
    }
}

// Check password confirmation
function checkPasswords(input1, input2) 
{
  if (input1.value !== input2.value) 
  {
    showError(input2, "Passwords do not match");
  }
}


// Event listeners
form.addEventListener("submit", function(e) 
{
  e.preventDefault();
  checkRequired([username, email, password, passwordConfirm]);
  checkLength(username, 2, 30);
  checkLength(password, 8, 20);
  checkEmail(email);
  checkPasswords(password, passwordConfirm);
});