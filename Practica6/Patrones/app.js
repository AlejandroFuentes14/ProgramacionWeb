let greet = require("./greet1");
//let greet2 = require("./greet2").greet;
let greet2a = require("./greet2");
const greet3 = require("./greet3"); //objeto construido/instaciado
console.log(greet3);

greet();
greet2a.greet();
greet3.greet();
greet3.greeting = "Hello from the App"

let greet3b = require("./greet3")
greet3b.greet();

const Greet4 = require("./greet4");//constructor
let myGreet = new (Greet4);
myGreet.greet();

const greet5 = require("./greet5");
greet5.greet();
greet5.saludo();
greet5.saludo2();
greet5.saludo3();