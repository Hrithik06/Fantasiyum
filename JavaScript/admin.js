function openCity(evt, cityName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("city");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" w3-purple", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " w3-purple";
}

function result(form) {


  alert("Confirmed changes will be reflected");


}

/*Hiding textbox */
function ShowHideDiv(btnPressed) {

  if (btnPressed.value == "Game Name") {
    var dv = document.getElementById("dvName");

    dv.style.display = btnPressed.value == "Game Name" ? "block" : "none";

    var dv1 = document.getElementById("dvGameID");

    dv1.style.display = btnPressed.value == "Game Name" ? "block" : "none";

  }

  else if (btnPressed.value == "Number Of Players") {
    var dv = document.getElementById("dvPlayers");

    dv.style.display = btnPressed.value == "Number Of Players" ? "block" : "none";
  }


  else if (btnPressed.value == "Game Description") {
    var dv = document.getElementById("dvDescription");

    dv.style.display = btnPressed.value == "Game Description" ? "block" : "none";
  }

  else if (btnPressed.value == "Entry Price") {
    var dv = document.getElementById("dvEntry");

    dv.style.display = btnPressed.value == "Entry Price" ? "block" : "none";
  }


  else if (btnPressed.value == "Prize Money") {
    var dv = document.getElementById("dvPrize");

    dv.style.display = btnPressed.value == "Prize Money" ? "block" : "none";


  }


  else if (btnPressed.value == "Game Type") {
    var dv = document.getElementById("dvType");

    dv.style.display = btnPressed.value == "Game Type" ? "block" : "none";

    var dv1 = document.getElementById("dvTypeID");

    dv1.style.display = btnPressed.value == "Game Type" ? "block" : "none";
  }
}





/*Hiding textbox */
function ShowHideDiv1(btnPressed) {

  if (btnPressed.value == "Game Name") {

    var dv1 = document.getElementById("dvGameID1");

    dv1.style.display = btnPressed.value == "Game Name" ? "block" : "none";

    var dv = document.getElementById("dvName1");

    dv.style.display = btnPressed.value == "Game Name" ? "block" : "none";


  }

  else if (btnPressed.value == "Number Of Players") {
    var dv = document.getElementById("dvPlayers1");

    dv.style.display = btnPressed.value == "Number Of Players" ? "block" : "none";
  }


  else if (btnPressed.value == "Game Description") {
    var dv = document.getElementById("dvDescription1");

    dv.style.display = btnPressed.value == "Game Description" ? "block" : "none";
  }

  else if (btnPressed.value == "Entry Price") {
    var dv = document.getElementById("dvEntry1");

    dv.style.display = btnPressed.value == "Entry Price" ? "block" : "none";
  }


  else if (btnPressed.value == "Prize Money") {
    var dv = document.getElementById("dvPrize1");

    dv.style.display = btnPressed.value == "Prize Money" ? "block" : "none";


  }


  else if (btnPressed.value == "Game Type") {
    // var dv = document.getElementById("dvType1");

    // dv.style.display = btnPressed.value == "Game Type" ? "block" : "none";

    var dv1 = document.getElementById("dvTypeID1");

    dv1.style.display = btnPressed.value == "Game Type" ? "block" : "none";
  }
}