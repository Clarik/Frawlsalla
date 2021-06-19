function validate() {
    try{
        document.getElementById('msg').innerText = ""
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var pass = document.getElementById('password').value;
        var comPass = document.getElementById('com-pass').value;

        if (validateName(name) == false) return;
        if (validateEmail(email) == false) return;
        if (validateGender() == false) return;
        if (validatePassword(pass, comPass) == false) return;
        if (document.getElementById('checkbox').checked == false) {
            alert("You must agree to the terms & conditions")
            return;
        }
        alert("You've sucessfully registered to Frawlsalla!");
        window.location.replace('../html/home.html');
    }catch (error) {
        return;
    }
    return;
    
}

function validateName(text) {
    var name = String(text).toString()
    if (name == "" || name == " ") {
        alert("Name must be filled!");
        return false
    }

    for (var i = 0; i < name.length; i++) {
        if (!(name[i] >= 'A' && name[i] <= 'Z') &&
            !(name[i] >= 'a' && name[i] <= 'z')) {
            alert("Name must be alphabetic!")
            return false;
        }
    }
    return true;
}

function validateEmail(text) {

    var email = String(text).toString();

    if (email == "") {
        alert("Email must be filled")
        return false;
    }

    if (!email.includes('@')) {
        alert("Email must have @!");
        return false;
    }

    if (!email.endsWith(".com")) {
        alert("Email must ends with .com!")
        return false;
    }

    var count = 0;
    for (var i = 0; i < email.length; i++) {
        if (email[i] == '@') {
            count++;

            if (i == 0) {
                alert("Worng Email Format! cannot start with @")
                return false;
            }

            if (count > 1) {
                alert("Wrong Email Format! cannot have more than one @")
                return false;
            }

            if (email[i + 1] == '.') {
                alert("Wrong Email Format! cannot put . after @")
                return false;
            }
        }
    }
    return true;
}

function validateGender() {
    if (document.getElementById('male').checked == true) {
        return true
    }
    if (document.getElementById('female').checked == true) {
        return true
    }
    if (document.getElementById('other').checked == true) {
        return true
    }
    alert("Select your Gender!")
    return false
}

function validatePassword(text, comText) {
    var password = String(text).toString()
    var comPass = String(comText).toString()

    if (password < 8) {
        alert("Password must be 8 character long!")
        return false
    }

    if (password.match(comPass) == false) {
        alert("Confirm Password do not match")
        return false
    }

    return true
}