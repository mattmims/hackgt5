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
