let submit_btn = $('#btn_submit')

submit_btn.click(
    ()=>{
        return validate()
    }
)

function validate(){
    try{
        var name = document.getElementById('name').value.trim();
        var email = document.getElementById('email').value.trim();
        var pass = document.getElementById('password').value;
        var comPass = document.getElementById('com-pass').value;

        if (validateName(name) == false) return false;
        if (validateEmail(email) == false) return false;
        if (validateGender() == false) return false;
        if (validatePassword(pass, comPass) == false) return false;
        if (validateTerm() == false) {
            return false;
        }
        alert("You've sucessfully registered to Frawlsalla!");
    }catch (error) {
        console.log(error)
        return false;
    }
    return true;
}

function validateName(text) {
    var name = String(text).toString()

    var errorName = document.getElementById('error_name')
    errorName.innerText = ""

    if (name == "" || name == " ") {
        alert("Name must be filled!");
        errorName.innerText="Name must be filled!"
        return false
    }

    for (var i = 0; i < name.length; i++) {
        if (!(name[i] >= 'A' && name[i] <= 'Z') &&
            !(name[i] >= 'a' && name[i] <= 'z')) {
            alert("Name must be alphabetic!")
            errorName.innerText="Name must be alphabetic!"
            return false;
        }
    }
    return true;
}

function validateEmail(text) {

    var email = String(text).toString();
    var errorEmail = document.getElementById('error_email')
    errorEmail.innerText = ""
    if (email == "") {
        alert("Email must be filled")
        errorEmail.innerText="Email must be filled"
        return false;
    }
    if (!email.includes('@')) {
        alert("Email must have @!");
        errorEmail.innerText="Email must have @!"
        return false;
    }
    if (!email.endsWith(".com")) {
        alert("Email must ends with .com!")
        errorEmail.innerText="Email must ends with .com!"
        return false;
    }
    var containat = false;
    for (var i = 0; i < email.length; i++) {
        if (email[i] == '@' && containat == false) {
            containat = true
            if (i == 0) {
                alert("Wrong Email Format! cannot start with @")
                errorEmail.innerText="Wrong Email Format! cannot start with @"
                return false;
            }
            if (email[i + 1] == '.' || (email[i-1] == '.' && i != 0)) {
                alert("Wrong Email Format! cannot put . after @")
                erroerrorEmailrName.innerText="Wrong Email Format! cannot put . after @"
                return false;
            }
        }
        else if(email[i] == '@' && containat == true)
        {
            alert("Wrong Email Format! cannot have more than one @")
            errorEmail.innerText="Wrong Email Format! cannot have more than one @"
            return false;
        }
    }
    return true;
}

function validateGender() {
    var errorGender = document.getElementById('error_gender')
    errorGender.innerText = ""
    if (document.getElementById('male').checked == true) {
        return true
    }
    if (document.getElementById('female').checked == true) {
        return true
    }
    alert("Select your Gender!")
    errorGender.innerText = "Select your Gender!"
    return false
}

function validatePassword(text, comText) {
    var password = String(text).toString()
    var comPass = String(comText).toString()

    var errorPassword = document.getElementById('error_password')
    errorPassword.innerText = ""

    if (password.length < 8) {
        alert("Password must be 8 character long!")
        errorPassword.innerText = "Password must be 8 character long!"
        return false
    }

    if (password.valueOf() != comPass.valueOf()) {
        alert("Confirm Password do not match")
        errorPassword.innerText = "Confirm Password do not match"
        return false
    }

    return true
}

function validateTerm(){
    var errorTerm = document.getElementById('error_term')
    errorTerm.innerText = ""

    if(document.getElementById('checkbox').checked == false){
        alert("You must agree to the terms & conditions")
        errorTerm.innerText = "You must agree to the terms & conditions"
        return  false
    }
    return true;
}