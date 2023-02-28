let passwordField = document.getElementById("password")
let confirmPasswordField = document.getElementById("confirmPass");
let lengthValidation = document.getElementById("length");
let matchPasswordMsg = document.getElementById("match");
let submitBtn = document.getElementById("submitButton");
let rg2 = /^[A-Za-z]\w{7,15}$/;

confirmPasswordField.addEventListener("input", passValidation);
passwordField.addEventListener("input",passValidation);

function passValidation()
{

    if(!passwordField.value.match(rg2))
    {
        lengthValidation.innerHTML = "⚠️ Password must be longer than 8 characters";
        submitBtn.disabled = true;

    } else
    {
        lengthValidation.innerHTML= "";
        submitBtn.disabled = false;
    }

    if(passwordField.value !== confirmPasswordField.value)
    {
        confirmPasswordField.classList.add("invalid");
        matchPasswordMsg.innerHTML = "⚠️ Passwords do not match";
        submitBtn.disabled = true;
    }else
    {
        confirmPasswordField.classList.remove("invalid");
        matchPasswordMsg.innerHTML = "";
        
    }
}

