/*Code below will run once the DOM is ready*/
$(document).ready(function(){
  /*console.log( 'ready!' );*/


  /*Objects with all of each player's attributes*/
  var player1 = { 
  hpCounter:120,
  attackPower:35,
  counterAttack:50,
  attack:function(otherPlayer) {
    otherPlayer.hp - this.attackPower
  }
  attackIncrease:function(otherPlayer) {
    otherPlayer.hp - this.attackPower[1] ++;
  }

  };

  
  var player2 = {
    hpCounter:150,
    attackPower:45,
    counterAttack:54,
    attack:function(otherPlayer) {
      otherPlayer.hp - this.attackPower
  }

  };


  var player3 = {
    hpCounter:250,
    attackPower:80,
    counterAttack:57,
    attack:function(otherPlayer) {
      otherPlayer.hp - this.attackPower
  }
  
  };


  var player4 = {
    hpCounter:200,
    attackPower:100,
    counterAttack:51,
    attack:function(otherPlayer) {
      otherPlayer.hp - this.attackPower
  }

  };

  /*Storing */
  $("#lukeSkywalker").data("player1");  
  $("#obiwan").data("player2");
  $("#darthvader").data("player3");
  $("#darthsidious").data("player4");

  
  /*An array variable that refers to the players collectively*/
  var players = ["player1", "player2", "player3", "player4"];

 
  /*Sets game up, moves all character to the character selection area.*/
  /*function startGame(){

    $("players").append(".characterSelection");

    if ($("player").on("click","a,img", function (e) {
        e.preventDefault(); 

        $("player").append("enemiesAttack");

    };
  })*/




  $("#lukeSkywalker").on("click","a,img", function (e) {
        e.preventDefault();
        console.log('You Clicked Me');
      });

    $("#obiwan").on("click","a,img", function (e) {
        e.preventDefault();
        console.log('You Clicked Me');
      });

    $("#darthVader").on("click","a,img", function (e) {
        e.preventDefault();
        console.log('You Clicked Me');
      });

    $("#darthSidious").on("click","a,img", function (e) {
        e.preventDefault();
        console.log('You Clicked Me');
      });






});
  // function enemies() {

  //   if 


  // }


  
  // var counterAttack = {
  //   attackPower:

  // function startGame{




  // // }

  // };








// function moveDefender{}


// function roundComplete() {}


// button.on(click(function();

// });




// startGame();



// var player
// var enemies
// var hp
// var attack
// var lose
// var win

// function attack increase

