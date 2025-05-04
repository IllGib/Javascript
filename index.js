// Write code below 💖
console.log(" Pozole rojo ")
console.log(" ingredientes ")
console.log(" 1 kilo de maíz pozolero precocido ")
console.log("1 kilo de carne de puerco cortada en cubos")
console.log("Para servir ")
console.log("1 lechuga romana picada ")
console.log("1 cebolla pequeña picada ")
console.log(" Tostadas de maíz ")
console.log(" Modo de preparación")
console.log("Nada como un tradicional pozole para celebrar estas Fiestas Patrias. ¡Con tu sazón y el sabor de La Villita no quedará para el recalentado!");
console.log("Agrega el maíz, la cabeza de ajo y sal a tu gusto en una olla grande, cubre con agua y cocina a fuego medio durante 2 horas.");
console.log("Posteriormente agrega la carne a la olla y cocina durante una hora o hasta que la carne esté suave. Retira la cabeza de ajo.");
console.log("Sirve agua en una olla aparte para hervir el jitomate y los chiles hasta que estén suaves, quita las semillas y el rabo de los chiles y licua con el jitomate, sal, orégano, comino y un diente de ajo. Cuela y reserva.");
console.log("Decora con lechuga picada, cebolla y jugo de limón. Acompaña con tostadas con crema espolvoreadas con queso panela La Villita.");

/*The console*/
console.log("==================================");
console.log("         McDONALD'S RECEIPT       ");
console.log("----------------------------------");
console.log("           Order Details          ");
console.log("----------------------------------");
console.log(" Item            Quantity   Price ");
console.log("----------------------------------");
console.log("🍔 Burger       1          2.99   ");
console.log("🍟 Fries        1          2.49   ");
console.log("🥤 Soda         1          1.99   ");
console.log("----------------------------------");
console.log("Total                      7.47   ");
console.log("==================================");


/*Let and Constant*/
const secondName = "Sebástian";
const favoriteColor = "Red";

let myAddress = "CDMX";
let mood = "Blessing";

console.log("My profile: ");
console.log(secondName);
console.log(favoriteColor);
console.log(myAddress);
console.log(mood);

myAddress = "Deutchland"
mood ="Sad"
console.log(myAddress);
console.log(mood);

/* Tipos de datos */

/*Crea algunas variables para tu empresa favorita con los siguientes tipos de datos:*/

companyName, una cadena.
foundingYear, un número.
isActive, un booleano.
fundingAmount, indefinido.
Imprímelos usando console.log().

let companyName ="Industries Martínez";
let foundingYear ="2025";
let isActive ="true";
let fundingAmount;

console.log(companyName);
console.log(foundingYear);
console.log(isActive);
console.log(fundingAmount);


/* Operadores */

const temperatureFahrenheit ="70";
const temperatureCelsius =(temperatureFahrenheit-32)/1.8;

console.log(temperatureCelsius);

/* Exponents */

let peso= 61;
let estatura= 1.60;

let imc = peso/(estatura**2);

console.log(imc);

Aquí hay un resumen de todo lo que aprendimos en este capítulo:
let y const palabras clave.
Tipos de datos: números, cadenas, booleanos, nulos e indefinidos.
Operadores aritméticos: +, -, *, /.
%El operador módulo encuentra el resto de la división entre dos números.
**El operador exponente eleva un número a la potencia de otro número.
¡Juntémoslo todo una vez más!

/*Estamos en el año 2099… ¡ya podemos tomarnos unas vacaciones en la Luna o Marte! 🚀
Cree un programa de conversión de peso que:

Toma tu peso en la Tierra.
Lo convierte a tu peso en la Luna o en Marte.
Para calcular tu peso en Marte:
destino _ peso​​​​​​​​​​​​=tierra _ peso​​​​​​​​​×0.38

La salida del programa debería verse así:*/

Your weight on Earth is 210 pounds.
Your weight on Mars is 79.8 pounds.

const peso_tierra= 61;
const peso_marte = peso_tierra*0.38;
console.log(" Tu peso en la tierra es " + peso_marte + "Kilogramos");
console.log(" Tu peso en Marte es " + peso_tierra + "Kilogramos");

/*Condicionales con Math.random*/
let num = Math.random();

if (num > 0.5) {
  console.log("Heads");
} else {
  console.log("Tails");
}

/* Cree un programa good-morning.js que imprima un mensaje si es temprano en el día.

Define una hourvariable y dale la hora actual del día.

Escriba una if declaración para lo siguiente:

Si hour< 12, imprime “Buenos días 🌞” y algunas de tus rutinas matutinas.
Después de ejecutar el código, cambie hourel valor de y ejecútelo de nuevo. Repita esto varias veces para asegurarse de que el programa funcione correctamente.*/

let hour = 14;

if (hour < 12) {
  console.log("Good Morning  🌞");
} else {
  console.log("Good Afternoon");
}


/* En química, el pH es una escala utilizada para especificar la acidez o basicidad de un fluido.

Cree un programa ph-levels.js que verifique si un nivel de pH es básico, ácido o neutro.

Primero, crea una variable llamada ph y asígnale un valor entre 0 y 14.

Escriba una declaración if/ else if/ elseque:

Si phes mayor que 7, salida “Básico”.
De lo contrario, si phes menor que 7, salida “Ácido”.
De lo contrario, salida “Neutral”. */

let ph = 10;
if (ph > 7) {
  console.log(" Básico");
} else if(ph < 7){
  console.log(" Ácido ");
} else {
  console.log(" Neutral ");
}

/*Game 8 bale  */

The Magic 8 Ball is a popular office toy and children's toy invented in the 1940's for fortune-telling and advice seeking. 🎱

It's an oversized 8 ball with some of the following answers:

Yes - definitely.
It is decidedly so.
Without a doubt.
Reply hazy, try again.
Ask again later.
Better not tell you now.
My sources say no.
Outlook not so good.
Very doubtful.
Create a magic8.js program that can respond to any Yes or No questions with a different answer each time it executes.

The output should have the following format:

Question:       [Question]
Magic 8 Ball:   [Answer]

Question:       Is Codédex better than Udemy yet?
Magic 8 Ball:   Better not tell you now.



const question =" Put question string here"

const randonNumber = Math.floor(Math.random()*9) + 1;

let  answer = "";

if (randonNumber === 1){
  answer = 'Yes - definitely';
}  else if (randonNumber === 2) {
  answer = 'It is decidedly so'
} else if (randonNumber === 3) {
  answer = 'Without a doubt'
} else if (randonNumber === 4) {
  answer = 'Reply hazy, try again'
} else if (randonNumber === 5) {
  answer = 'Ask again later'
} else if (randonNumber === 5) {
  answer = 'Better not tell you now'
} else if (randonNumber === 6) {
  answer = 'My sources say no'
} else if (randonNumber === 7) {
  answer = 'Outlook not so good'
} else if (randonNumber === 8) {
  answer = 'Very doubtful'
} else if (randonNumber === 9) {
  answer = 'Very doubtful'
} else {
  answer = 'error'
}

console.log("Question: ", question);
console.log("Answer: ", answer);

/*Operadores lógicos*/

En el verano de 2023, el humo de los incendios forestales en Canadá generó preocupación sobre el índice de calidad del aire (ICA) en la zona.

Cree un programa air-quality-index.js .

Busque en Google el IQA de su área y defina una aqi variable con ese número.

Escriba una declaración if// con la siguiente lógica:else ifelse

Si aqiestá entre 0 y 50, imprime "Bueno".
De lo contrario, si aqiestá entre 51 y 100, imprime "Moderado".
De lo contrario, si aqiestá entre 101 y 150, imprime "No saludable (grupos sensibles)".
De lo contrario, si aqiestá entre 151 y 200, imprime "No saludable".
De lo contrario, si aqiestá entre 201 y 300, imprime "Muy insalubre".
De lo contrario, escriba "Peligroso".

const aqi = 40;

if (aqi >= 0 && aqi <= 50){
  console.log("Good");
}else if (aqi >= 51 && aqi <= 100) {
  console.log("Moderate");
} else if (aqi >= 101 && aqi <= 150) {
  console.log("Unhealthy (Sensitive Groups)");
} else if (aqi >= 151 && aqi <= 200) {
  console.log("Unhealthy");
} else if (aqi >= 201 && aqi <= 300) {
  console.log("Very Unhealthy");
} else {
  console.log("Hazardous");
}

/* Rock Paper Scissor Game*/

Rock Paper Scissors is a classic game that resonates with folks from around the world. The rules are as follows:

Rock beats Scissors.
Scissors beat Paper.
Paper beats Rock.
Let's use conditionals, the random number generator, and create a program that simulates the game between the player and the computer!

Begin with a player variable and give it a 0 to represent "Rock", a 1 to represent "Paper", or a 2 to represent "Scissors."

Then use Math.random() to generate a number between 0 and 2 for another computer variable.

Then, use conditionals to compare the values of player and computer to see who wins!



//piedra = 0
//papel = 1
//tijera = 2

// rock paper Scissor

const player = 1;
let machine = Math.floor(Math.random() * 3);

if (player === 0){
  if (machine === 0) {
    console.log("Draw");
  } else if (machine === 1) {
    console.log("The machine won!");
  } else if (machine === 2) {
    console.log("The player won!");
  } else {
    console.log(" An error ocurred");
  }
} else if (player === 1) {
  if (machine === 0) {
    console.log("The player won!");
  } else if (machine === 1) {
    console.log("Draw!");
  } else if (machine ===2) {
    console.log("The machine won!");
  }else {
    console.log("An error ocurred");
  }
} else if (player === 2) {
  if(machine === 0) {
    console.log("The machine won!");
  } else if (machine === 1) {
    console.log("The player won!");
  } else if (machine === 2) {
    console.log("Draw");
  } else {
    console.log("An error ocurred");
  }
} else {
  console.log("An error ocurred");
}


/* Loops o  bucles*/

//Duck duck goose  🦆
//Codédex

let randonNumber = Math.floor(Math.random() * 10);

while (randonNumber !== 7) {
  console.log("Duck  🦆");
  randonNumber = Math.floor(Math.random() * 10)
}

console.log("Goose! 🦢");
}

//  bucles while
// while (condition) {
  // Code here

const luckyNumber = 7;

let guess = Math.floor(Math.random() * 10) + 1;

while (guess !== luckyNumber) {
  console.log(`Nope, it isn't ${guess});
  guess = Math.floor(Match.random() * 10) + 1;
}

console.log(My lucky number is ${luckyNumber}!');


// bucles iteradores y ciclos for

for(let i = 1; i <= 100; i++){
  console.log("I Must Not Tell Lies");
}

//continue iteradores y bucles

for (let i = 1; i <= 50; i++  ) {
  if (i % 2 === 1) {
    continue;
  } else if (i === 42) {
    console.log(i);
    break;
  } else {
    console.log(i);
  }
}

// based numbers

Puedes utilizar bucles para realizar las mismas operaciones una y otra vez.
Un while bucle se ejecuta mientras se cumpla una condición true.
Un for bucle se ejecuta una cierta cantidad de veces, según una variable de iterador.
La continue palabra clave finaliza la iteración actual en un bucle, dada una true condición.
La break palabra clave sale completamente del bucle, dada una true condición.
Utilicemos nuestro nuevo conocimiento de los bucles de JavaScript para crear un programa que convierta un entero en su número binario equivalente .
Nota: Los números binarios son "base 2", lo que significa que están representados por 0 y 1.
En un archivo based-numbers.js , cree un programa que comience con una myNumber variable, inicializada en un entero de su elección, seguido de una binary variable establecida en una cadena vacía.
A continuación, utilice un bucle para ir de myNumber a 0, reduciendo myNumber a la mitad cada vez (es decir, Math.floor(num / 2)).
Hagamos lo siguiente en cada iteración:
Determinar si el valor actual de myNumber se puede dividir por 2.
Si es así, agréguelo "0"a binary.
De lo contrario, agregue "1".




const myNumber = 30;
let binary = "";

// with while loop
let i = myNumber;
binary = "";
while (i >= 1) {
  if (i % 2 == 0) {
    binary = "0" + binary;
  } else {
    binary = "1" + binary;
  }
  i = Math.floor(i/2);
}

console.log('Wit the loop: ' + binary);

//with for loop
for (let i = myNumber; i >= 1; i = Math.floor(i/2)){
  if (i % 2 == 0) {
    binary = "0" + binary;
  } else {
    binary = "1" + binary;
  }
}
console.log('With for loop: ' + binary;);
