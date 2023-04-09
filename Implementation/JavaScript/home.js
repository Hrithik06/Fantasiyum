function admincheck(form) {
    adminUname=form.uname.value;
    adminPsw = form.adminPsw.value ;
    fixAdminUname= "admin";
    fixAdminPsw="admin1234";
    if (adminUname == fixAdminUname &&  adminPsw == fixAdminPsw) {

        window.open('adminpage.html')
        // window.location.href = "adminpage.html";
    }
    else if (adminUnam == '') {
        alert("Please enter username");

    }
    else if (adminPsw == '') {
        alert("Please enter Password");
    }
    else if (adminUnam != fixAdminUname) {

        alert("Check your username!")

    }
    else if (adminPsw != fixAdminPsw) {
        alert("Please enter correct Password");

    }
}

function playercheck(form) {

userEmail=form.emaillogin.value;
userPsw = form.psw.value;

fixEmail = "abc@xyz.com";
fixPsw = "user1234";
    if (userEmail == fixEmail && userPsw == fixPsw) {
        alert("Login Successful");
        window.open('player.html')
        // window.location.href = "player.html";
    }
    else if (userEmail == '') {
        alert("Please enter Email");

    }
    else if (userPsw == '') {
        alert("Please enter Password");
    }
    else if (userEmail != fixEmail) {

        alert("Check your email!")

    }
    else if (userPsw != fixPsw) {
        alert("Please enter correct Password");

    }
}
function checkPassword(form) {
    password1 = form.pswd.value;
    password2 = form.pswrepeat.value;


    // If password not entered
    if (password1 == '')
        alert("Please enter Password");

    // If confirm password not entered
    else if (password2 == '')
        alert("Please retype password");

    // If Not same return False.    
    else if (password1 != password2) {
        alert("\nPassword did not match. Make sure both passwords are same.");
        return false;
    }

    // If same return True.
    else {
        // alert("Welcome to Fantasyium!");
        alert("User registered successfully");
        window.open('player.html');
        return true;

    }
}

