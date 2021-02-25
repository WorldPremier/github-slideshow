function calculate(){
    let numcups = document.getElementById("numcups").innerHTML;
    let cupanswer = document.getElementById("cupanswer")
    let maxcups = 3;



    let nummiles = document.getElementById("nummiles").innerHTML;
    let oilanswer = document.getElementById("oilanswer");
    let maxmile = 500;




    if(numcups >=maxcups){
        cupanswer.innerHTML = "Had to many!";
        console.log("Had to many!")
    }else{
        cupanswer.innerHTML = "Give me more coffee!";
        console.log("Give me more coffee!")

    }

    if(nummiles >= maxmile){
        oilanswer.innerHTML = "Need an oil change!";
        console.log("Need an oil change!")

    }else{
        oilanswer.innerHTML = "You're good on oil!";
        console.log("You're good on oil!")

    }

}




//in class practice*********************************************************************************************
// var a = 7; // assign
// 7 == "7" // compare - value not data type --> true
// 7 === "7" // compare - value AND data type -->false

// console.log(a);

// // how to loop through a set of numbers 0-20;
// // how to add 2 to each item ONLY IF that item is an even number
// for (let i = 0; i <= 20; i++) {
//     console.log("current item: "+ i);

//     // is it even?
//     // if a number is divisible by 2 == even
//     // i = current item in our loop
//     // divide i by 2 and give us any remainder 
//     // is the result of that division

//   if (i % 2 == 0) {
//     console.log(i + 2);
//   } else {
//     console.log("odd");
//   }
// }
// let num = 2;
// while(num <=10){
//     num +1;
//     console.log(num);
// }
//****************************************************************************************************************** */

//funtion declaration
// let cup1=1;
// let cup2=2;
// function logMessage (cup1, cup2){
//     console.log(cup1, cup2);
    
// }
// logMessage("Yes I'll take another cup of coffee", "Yes I'll take another cup of coffee");

// let x= true;
// if(x){
//     console.log(true);
// }else if(x==true){
//     console.log("this won't run");
// }else{
//     console.log("false");
// }

// let temp = 60;

// if (temp > 45) {
//     console.log("I'm going hiking!");
// } else {
//     console.log("It's too cold to go hiking");
// }


// let n=0;
// while(n<3){
//     console.log("I want more coffe");
// }else(){

// }

// let numCoffee =0;
// while(numCoffee<3){
//     numCoffee++;
// console.log("Yes I'll take number " + numCoffee + " cup of coffe");}

// }else if(numC<3){
// console.log("Yes I'll take another cup of coffee");
// numC++;

// }else{
//     console.log("I think I'm okay for now.");

// }

// console.log(numC);

// var myArray = ["What is the meaning of life?", "The meaning of life is"]

// for(var i= 0; i<myArray.length; i++)
// {

// }
// if(var i= 99; i>=0; i--){
//     if (i>0){console.log("He")}
// }



// let numCoffee =0;
// while(numCoffee<3){
//     numCoffee++;
// console.log("Yes I'll take number " + numCoffee + " cup of coffe");}








// let needOil=true;
// let carMiles=500;
// while(carMiles<=500){
//     carMiles--;
//     console.log("I have: " + carMiles + "number of miles.");
//     // needOil = needOil--;
// }