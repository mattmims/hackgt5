function toggleText() {
    var textform = document.getElementById("textcontainer");
    var emailform = document.getElementById("emailcontainer");
    emailform.style.display = "none";
    if (textform.style.display === "none") {
        textform.style.display = "block";
    }
}

function toggleEmail() {
    var textform = document.getElementById("textcontainer");
    var emailform = document.getElementById("emailcontainer");
    textform.style.display = "none";
    if (emailform.style.display === "none") {
        emailform.style.display = "block";
    }
}

function trySubmit() {
    const textFormat = /^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})$/;
    const emailFormat = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    var canSubmit = true;
    var usernameExists = document.getElementById("username") == "";
    var passwordExists = document.getElementById("password") == "";
    if (!usernameExists) {
        console.log("Please enter a username.");
        canSubmit = false;
    } if (!passwordExists) {
        console.log("Please enter a password.");
        canSubmit = false;
    } if (!(document.getElementById("textradio").checked || document.getElementById("emailradio").checked)) {
        console.log("Please select a contact method.");
        canSubmit = false;
    } if (document.getElementById("textradio").checked) {
        if (!textFormat.test(document.getElementById("phonenumber"))) {
            console.log("Please enter a valid phone number.");
            canSubmit = false;
        }
    } if (document.getElementById("emailradio").checked) {
        if (!textFormat.test(document.getElementById("email"))) {
            console.log("Please enter a valid email address.");
            canSubmit = false;
        }
    }
    if (usernameExists && passwordExists) {
        //TODO: check for match
    }
    if (canSubmit) {
        submit(); //TODO: define submit function
    }
}
