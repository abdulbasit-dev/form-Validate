const form = document.querySelector('#form')
const username = document.querySelector('#username')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const password2 = document.querySelector('#password2')

//show error function
function showError(input , message){
    const formGroup = input.parentElement;
    // formGroup.classList.add('error');
    formGroup.className = "form-group error";
    const small = formGroup.querySelector('small');
    small.innerText = message;
}

//show success outline
 function showSuccess(input){
    const formGroup = input.parentElement;
    // formGroup.classList.add('success');
    formGroup.className = "form-group success";
}

//check email is valid
//before refactoring
// function isValidEmail(email) {
//     var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(String(email).toLowerCase());
// }


//add event listner to the 
//before refactoring
// form.addEventListener('submit' , (e)=>{
//     e.preventDefault()
//     if(username.value ===''){
//         showError(username , "Username is required")
//     }else{
//         showSuccess(username)
//     }

//     if(email.value ===''){
//         showError(email , "email is required")
//     }else if(!isValidEmail(email.value)){
//         showError(email , "email is not valid")
//     }else{
//         showSuccess(email)
//     }

//     if(password.value ===''){
//         showError(password , "password is required")
//     }else{
//         showSuccess(password)
//     }
//     if(password2.value ===''){
//         showError(password2 , "please write password again")
//     }else{
//         showSuccess(password2)
//     }
// })



function checkRequire(inputArr){
    //for each is a high order array method
    inputArr.forEach((input)=>{
        if(input.value.trim() ===''){
            showError(input , `${getFieldName(input)} is required`)
        }else{
            showSuccess(input)
        }
    })
}

function isValidEmail(input) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value.trim())){
        showSuccess(input);
    }else{
        showError(input , 'Email is not valid');
    }
}

//cehck input length
function checkLength(input , min , max){
    if(input.value.length<min){
        showError(input , `${getFieldName(input)} must be at least ${min} character`)
    }else if (input.value.length > max){
        showError(input , `${getFieldName(input)} must be less than least ${max} character`)
    }else{
        showSuccess(input)
    }
}

//check for password macth
function checkPasswordMatch(input1 , input2){
    if(input1.value !== input2.value){
        showError(input2 , "password not match");
    }
}

function getFieldName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1)
}


//add event listner to the 
//after refactoring
form.addEventListener('submit' , function(e){
    e.preventDefault();
    checkRequire([username, email, password , password2]);
    checkLength(username , 3 , 15);
    checkLength(password , 8 , 20);
    isValidEmail(email);
    checkPasswordMatch(password , password2);

})