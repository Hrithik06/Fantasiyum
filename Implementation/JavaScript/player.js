function ShowHideDiv(btnPressed) {

    if (btnPressed.value == "Soccer") { // if the button is pressed, show the div of soccer and hide other divs
        // alert("Soccer");
        //hide 
        var dvL = document.getElementById("LeftDiv");

        dvL.style.display = btnPressed.value == "Soccer" ? "none" : "block";


        var dvC = document.getElementById("CricketDiv");

        dvC.style.display = btnPressed.value == "Soccer" ? "none" : "block";

        var dvB = document.getElementById("BasketBallDiv");

        dvB.style.display = btnPressed.value == "Soccer" ? "none" : "block";
        //hide

        //show soccer

        var dvS = document.getElementById("SoccerDiv");

        dvS.style.display = btnPressed.value == "Soccer" ? "block" : "none";
        //show soccer

    }



    else if (btnPressed.value == "Cricket") { // if the button is pressed, show the div of cricket and hide other divs

        //hide
        var dvL = document.getElementById("LeftDiv");

        dvL.style.display = btnPressed.value == "Cricket" ? "none" : "block";


        var dvS = document.getElementById("SoccerDiv");

        dvS.style.display = btnPressed.value == "Cricket" ? "none" : "block";




        var dvB = document.getElementById("BasketBallDiv");

        dvB.style.display = btnPressed.value == "Cricket" ? "none" : "block";

        //hide



        //show Cricket
        var dvC = document.getElementById("CricketDiv");

        dvC.style.display = btnPressed.value == "Cricket" ? "block" : "none";

        // show Cricket
    }


    else if (btnPressed.value == "BasketBall") { // if the button is pressed, show the div of basket ball and hide other divs

        //hide

        var dvL = document.getElementById("LeftDiv");

        dvL.style.display = btnPressed.value == "BasketBall" ? "none" : "block";

        var dvS = document.getElementById("SoccerDiv");
        dvS.style.display = btnPressed.value == "BasketBall" ? "none" : "block";


        var dvC = document.getElementById("CricketDiv");
        dvC.style.display = btnPressed.value == "BasketBall" ? "none" : "block";



        //hide



        //show BasketBall
        var dvB = document.getElementById("BasketBallDiv");

        dvB.style.display = btnPressed.value == "BasketBall" ? "block" : "none";
        //show BasketBall

    }
}




function ShowHideDivBoard(btnPressed)
{
    if (btnPressed.value == "Chess") { // if the button is pressed, show the div of soccer and hide other divs
        // alert("Soccer");
        //hide 
        var dvL = document.getElementById("LeftDiv");

        dvL.style.display = btnPressed.value == "Chess" ? "none" : "block";


        var dvG = document.getElementById("GoDiv");

        dvG.style.display = btnPressed.value == "Chess" ? "none" : "block";

        // var dvA = document.getElementById("accordionDiv");

        // dvA.style.display = btnPressed.value == "Chess" ? "none" : "block";

        //hide

        //show soccer

        var dvC = document.getElementById("ChessDiv");

        dvC.style.display = btnPressed.value == "Chess" ? "block" : "none";

        // var dvCR = document.getElementById("ChessRulesDiv");

        // dvCR.style.display = btnPressed.value == "Chess" ? "none" : "block";
        //show soccer

    }

    else if (btnPressed.value == "Go") { // if the button is pressed, show the div of soccer and hide other divs
        // alert("Soccer");
        //hide 
        var dvL = document.getElementById("LeftDiv");

        dvL.style.display = btnPressed.value == "Go" ? "none" : "block";


        var dvC = document.getElementById("ChessDiv");

        dvC.style.display = btnPressed.value == "Go" ? "none" : "block";

        // var dvA = document.getElementById("accordionDiv");

        // dvA.style.display = btnPressed.value == "Go" ? "none" : "block";




        //hide

        //show soccer

        var dvG = document.getElementById("GoDiv");

        dvG.style.display = btnPressed.value == "Go" ? "block" : "none";
        //show soccer

    }
}