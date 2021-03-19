// var userAge = 15;
// var is_subscribed = false;
// console.log(userAge);
// console.log(is_subscribed);

// if(userAge < 18 && is_subscribed !== true){
//     console.log("The user is younger than 18 and is not subscribed");
// }


// var userAge = 27;
// var is_subscribed = true;
// console.log(userAge);
// console.log(is_subscribed);

// if(userAge < 18 && is_subscribed !== true){
//     console.log("The user is younger than 18 and is not subscribed");
// }
// else if(userAge > 18 && is_subscribed === true){
//     console.log("The user is older than 18 and is subscribed");
// }


// var userAge = 16;
// var is_subscribed = true;
// console.log(userAge);
// console.log(is_subscribed);

// if(userAge < 18 && is_subscribed !== true){
//     console.log("The user is younger than 18 and is not subscribed");
// }
// else if(userAge > 18 && is_subscribed === true){
//     console.log("The user is older than 18 and is subscribed");
// }
// else if(userAge < 18 && is_subscribed === true){
//      console.log("The user is younger than 18 and is subscribed")   
// }


// var userAge = 29;
// var is_subscribed = true;
// console.log(userAge);
// console.log(is_subscribed);

// if(userAge < 18 && is_subscribed !== true){
//     console.log("The user is younger than 18 and is not subscribed");
// }
// else if(userAge > 18 && is_subscribed === true){
//     console.log("The user is older than 18 and is subscribed");
// }
// else if(userAge < 18 && is_subscribed === true){
//      console.log("The user is younger than 18 and is subscribed")   
// }
// else if (userAge > 18 && is_subscribed === true){
//     console.log("The user is 18 and older and is subscribed")
// } 
   


var userAges = [15, 19, 17, 29 ];
var is_subscribed = [false, true, true, true];

var userAgesLength = userAges.length;
for(var i = 0; i < userAgesLength; i++){
    if(userAges[i] === 15){
        console.log("The user is younger than 18 and is not subscribed");
    }
    else if(userAges[i] === 19){
        console.log("The user is older than 18 and is subscribed");
    }
    else if(userAges[i] === 17){
         console.log("The user is younger than 18 and is subscribed");   
    }
    else if (userAges[i] === 29){
        console.log("The user is 18 and older and is subscribed");
    } 
       
}





 
 








