// Name Selection 


let player1= "PLayer 1";
let player2= "Player 2";

function editName(){


player1=prompt("Change PLayer1 Name")
player2= prompt("Change Player2 Name")

if (player1.lenght < 1 || player2.length <1 ){
    alert("please enter a valid name!")
    return;
}

document.querySelectorAll("p")[0].innerText = player1;
document.querySelectorAll("p")[1].innerText = player2;

}




    //    Dice Game  //
    function playDice() {

        var randomNumber1= Math.floor(Math.random() * 6)+1;
        var randomNumber2=  Math.floor(Math.random() * 6)+1;   

//   Winner announcer //
    setTimeout(() => {


        document.querySelector(".img1").setAttribute('src', './images' + "/dice" + randomNumber1 + '.png');

        document.querySelector(".img2").setAttribute('src', './images' + "/dice" + randomNumber2 + '.png');
   
  
    if ( randomNumber1 > randomNumber2) {

       document.querySelector("h1").innerHTML = player1 + " Wins";


    } else if (randomNumber1 < randomNumber2)  {

         document.querySelector("h1").innerHTML = player2 + " Wins";

    } else {

        document.querySelector("h1").innerHTML= "Draw";

    }
     

    }, 10);
  

}

