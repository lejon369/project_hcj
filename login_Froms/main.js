let form = document.querySelector('#form');
let userName = document.querySelector("#username");
let userEmail = document.querySelector("#email");
let userPass = document.querySelector("#password");
let userRepass = document.querySelector("#repassword");


function showError(input, message) {
    const FormControl = input.parentElement
    FormControl.className = "form-control error";
    const small = FormControl.querySelector("small");
    small.innerText = message;
}


function showSuccess(input) {
    const FormControl = input.parentElement
    FormControl.className = "form-control success";
}

function checkMail(input) {
    const regExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (regExp.test(input.value)) {
        showSuccess(input);
    } else {
        showError(input, "Please enter a valid Email address");
    }
}



function checkInputLength(input, min, max) {
    if (input.value.length < min) {
        showError(input, `${getFieldName(input)} must be least than ${min} Character`);
    } else if (input.value.length > max) {
        showError(input, `${getFieldName(input)} must be less than ${max} Character`);
    } else {
        showSuccess(input);
    }
}



function getFieldName(input) {
    // .ToUpperCase()
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}



function chaeckPassWordMatch(input1, input2) {
    if (input1.value !== input2.value) {
        showError(input2, "Password is not Matched");
    }
}



form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputLength(userName, 3, 20)
    checkInputLength(userPass, 6, 64)
    checkMail(email)
    chaeckPassWordMatch(userPass, userRepass)
})
