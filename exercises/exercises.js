function add(num1, num2){
    return num1+num2;
}

sum = add(9,102);
console.log(sum);


// function parameters
const welcomeEL = document.getElementById("welcome-el");

function greetUser(greeting, name){
    welcomeEL.textContent = `${greeting} ${name}!`;

}

greetUser("Hello","May");





// practice template strings/literals

// const recipient = "James";
// const sender = "Amanda";

// const email = `
//     Hey ${recipient}! 
//     How is it going? 
//     Cheers, ${sender}`;

// console.log(email);



// buyBtn = document.getElementById("container");

// buyBtn.innerHTML = "<button onclick='buy()'>Buy!</button>";

// function buy() {
//     buyBtn.innerHTML += "<p>Thank you for buying!</p>";
// }


// let boxAction = document.getElementById("box");
// boxAction.addEventListener("click", function(){
//     console.log("I want to open the box!")
// })

// // not to be reassigned
// const playerName = "Per";
// // should be reassigned later in code
// let credits = 45;