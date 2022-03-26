






var input;
var heading;



function preload(){



}
function setup(){
    createCanvas(400,400)
    background("green")

input=createInput();
input.position(30,50)

heading=createElement("h4","WHO IS THE MASTER JEDI IN STAR WARS?")
heading.position(30,10)





}
function draw(){

var value=input.value()
switch(value){
case "yoda": console.log("correct")
break;
case "luke skywalker": console.log("correct")
break;
case "anakin skywalker": console.log("correct")
break;
case "rey skywalker": console.log("correct")
break;
case "kylo ren": console.log("incorrect")
break;
case "ahsoka tano": console.log("incorrect")
break;
case "mace windu": console.log("incorrect")
break;
case "obi wan kenobi": console.log("incorrect")
break;
case "darth vader": console.log("incorrect")
break;
case "han solo": console.log("incorrect")
break;
case "ezra bridger": console.log("incorrect")
break;
default : console.log("type a name")
break;
}
}