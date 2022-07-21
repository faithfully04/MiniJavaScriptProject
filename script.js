//object to store details

let userDetailsDatabase = {}



function getUserDetails(){

    ////////////// Get username
    let userName = prompt("Enter your username")

    if (userName == null) {
        return
    }

    function validateUserName(userName) {
        if(userName.length < 7 && userName.length > 0) {
            return true
        } else {
            return false
        }
    }

    while(validateUserName(userName) == false){
        userName = prompt("Username character must be less than 7 and greater than 0")
    }

    userDetailsDatabase["Username"] = userName


    /////////////////// Email Address
    let email = prompt("Enter your email address")

    if (email == null) {
        
        return
    }

    function validateEmail(email){
        //set email check criteria
        const emailCheck = /^[a-zA-Z0-9.!#$%&'"+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gi;
        //checks if it's an email
        emailCheckResult = emailCheck.test(email);
        if (emailCheckResult == true){
            return true
        }else {
            return false
        }
    }

    while(validateEmail(email) == false){
        email = prompt("Enter a valid email address")
    }

    userDetailsDatabase["Email"] = email

    /////////////////////Phone number
    let phone = prompt(("Enter your phone number"))

    if(phone == null){
        return
    }

    function validatePhoneNumber(phone){
        if(phone.length == 11){
            return true
        } else {
            return false
        }
    }

    while(validatePhoneNumber(phone) == false) {
        phone = prompt("Enter a valid phone number")
    }

    userDetailsDatabase["PhoneNumber"] = phone


    //////////////////////// Password
    let password = prompt("Enter your password")

    if(password == null){
        return
    }

    function validatePassword(password) {
        if(password.length < 6) {
            return false
        }else{
            return true
        }
    }

    while(validatePassword(password) == false){
        password = prompt("Password must not be less than 6 digits")
    }

    userDetailsDatabase["Password"] = password


    /////////////////////////////////////// Confirm password
    let confirmPassword = prompt("Confirm your password")

    if(confirmPassword == null){
        return
    }

    function validateConfirmPassword(confirmPassword){
        if (confirmPassword != password){
            return false
        }else{
            return true
        }
    }

    while(validateConfirmPassword(confirmPassword) == false){
        confirmPassword = prompt("Confirm password does't match password, try again")
    }

    userDetailsDatabase["Confirm Password"] = confirmPassword

    console.log(userDetailsDatabase);

}

function displayUserDetails(){

    alert(`Your details\n\nUsername: ${userDetailsDatabase.Username}\nPhone Number: ${userDetailsDatabase.PhoneNumber}\nEmail: ${userDetailsDatabase.Email}\n`)

}



