function admincheck(form) {

    if (form.uname.value == "admin" && form.psw.value == "admin1234") {

        window.open("adminpage.html");
        // window.location.replace = ("adminpage.html");
    }
    else {

        alert("Please enter correct Username")

    }
}


function playercheck(form) {
    if (form.email.value == "abc@xyz.com" && form.psw.value == "user1234") {

        window.open('player.html')
        // window.location.href = "player.html";
    }
    else {

        alert("Please enter correct Username")

    }
}




// Function to check Whether both passwords
// is same or not.
function checkPassword(form) {
    password1 = form.psw.value;
    password2 = form.pswrepeat.value;

    // If password not entered
    if (password1 == '')
        alert("Please enter Password");

    // If confirm password not entered
    else if (password2 == '')
        alert("Please enter retype password");

    // If Not same return False.    
    else if (password1 != password2) {
        alert("\nPassword did not match. Make sure both passwords are same.");
        return false;
    }

    // If same return True.
    else {
        // alert("Welcome to Fantasyium!");
        window.open('playerlogin.html');
        return true;
  
    }
}

function showpsw() {
    alert("SHOW PSW")
    var x = document.getElementById("exampleInputEmail1");
    // x=form.psw.value;
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

