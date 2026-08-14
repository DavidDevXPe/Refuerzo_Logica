/* Primera parte - Nivel 1*/

const firstName = "David";
const lastName = "Castillo";
const age = 27;
const isStudent = true;

console.log(`Mi nombre es ${firstName} ${lastName}, tengo ${age} años y mi estado de estudiante es ${isStudent}.`);

const productPrice = 25;
//const quantity = 4;

//console.log(`El total de la compra es S/${productPrice * quantity}.`);

const totalPurchase = 68;
const payment = 100;

console.log(`El cambio es S/${payment - totalPurchase}.`);

const totalMinutes = 135;
const horas = Math.trunc(totalMinutes / 60);
const minutos = totalMinutes % 60;

console.log(`${horas} horas y ${minutos} minutos.`);

const width = 8;
const height = 5;

console.log(`Área: ${width * height}`);
console.log(`Perímetro: ${2 * (width + height)}`);

/* Segunda parte - Nivel 2*/

const fullName = firstName + " " + lastName;

console.log(`Bienvenido, ${fullName}.`);

const password = "javascript123";

console.log(password.length);

console.log(`${firstName[0]}.${lastName[0]}`)

const word = "JavaScript";

console.log(word[word.length -  1]);

const product = "Laptop";
const price = 2500;
const stock = 8;

console.log(`Producto: ${product} | Precio: S/${price} | Stock: ${stock} unidades`)

/* Tercera parte - Nivel 3 */

const isAdult = age >= 18;

console.log(isAdult);

const isAvailable = stock > 0;

console.log(isAvailable);

//const savedPassword = "js2026";
//const enteredPassword = "js2026";

//const isCorrect = savedPassword === enteredPassword;

//console.log(isCorrect);

const number = 15;
const isInRange = number >=10 && number <= 20;

console.log(isInRange);

const isActiveUser = true;
const isCorrectPassword = false;

const hasAccess = isActiveUser && isCorrectPassword;

console.log(hasAccess);

const descuento = isStudent || age > 60;

console.log(descuento);

const isBlocked = false;

const canEnter = !isBlocked;

console.log(canEnter);

/* Cuarta parte - Nivel 4 */

const priceText = "45.50";
const finalPrice = Number(priceText) + 10;

console.log(finalPrice);
console.log(typeof finalPrice);

const userInput = "David";
const convertedValue = Number(userInput);

console.log(Number.isNaN(convertedValue));

//const username = null;
const username = "";

const displayedName = username ?? "Invitado";

console.log(displayedName);

const quantity = 0;
const resultWithOr = quantity || 10;
const resultWithNullish = quantity ?? 10;

console.log(resultWithOr)
console.log(resultWithNullish)

/* ¿Cuánto vale resultWithOr? 10
¿Cuánto vale resultWithNullish? 0                    
¿Por qué son diferentes? */ 

// || busca el primer valor truthy 
// ?? busca el primer valor que no sea null ni undefined.

/*
console.log(Boolean(0)); 
console.log(Boolean(1)); 
console.log(Boolean("")); 
console.log(Boolean("Hola")); 
console.log(Boolean(null)); 
console.log(Boolean(undefined)); 
console.log(Boolean("false")); 
console.log(Boolean({})); 
F,V,F,V,F,F,V,V
*/

/* Quinta parte - Nivel 5 */

if (number === 0) {
    console.log("El número es 0.");
} else if (number > 0) {
    console.log("El número es positivo.");
} else {
    console.log("El número es negativo.");
};

const grade = 14;

if (grade < 0 || grade > 20) {
    console.log("Nota invalida.");
} else if (grade >= 11) {
    console.log("Aprobado.");
} else {
    console.log("Desaprobado.");
};

const edad = 27;

if (edad < 0) {
    console.log("Edad inválida.");
} else if (edad <= 12) {
    console.log("Niño.");
} else if (edad <= 17) {
    console.log("Adolescente.");
} else if (edad <= 59) {
    console.log("Adulto.");
} else {
    console.log("Adulto mayor");
};

const correctUsername = "admin";
const correctPassword = "1234";

const enteredUsername = "admin";
const enteredPassword = "1234";

if (enteredUsername === correctUsername && enteredPassword === correctPassword) {
    console.log("Acceso concedido");
} else if (enteredUsername !== correctUsername && enteredPassword !== correctPassword) {
    console.log("Usuario y contraseña incorrectos")
} else if (enteredUsername !== correctUsername) {
    console.log("Usuario incorrecto");
} else {
    console.log("Contraseña incorrecta");
};

const numero = 17;

if (numero % 2 === 0) {
    console.log(`${numero} es par`)
} else {
    console.log(`${numero} es impar`)
};

if (numero % 3 === 0 && numero % 5 === 0) {
    console.log("Es divisible por 3 y por 5")
} else if (numero % 3 !== 0 && numero % 5 !== 0) {
    console.log("No es divisible por 3 ni por 5")
} else if (numero % 3 === 0) {
    console.log("Solo es divisible por 3")
} else {
    console.log("Solo es divisible por 5")
};

/* Sexta parte - Nivel 6 */

const dayNumber = 3;

switch (dayNumber) {
    case 1: 
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    case 3:
        console.log("Miércoles");
        break;
    case 4:
        console.log("Jueves");
        break;
    case 5:
        console.log("Viernes");
        break;
    case 6:
        console.log("Sábado");
        break;
    case 7:
        console.log("Domingo");
        break;
    default:
        console.log("Día inválido");
}

const option = "multiplicar";
const number1 = 8;
const number2 = 4;

switch (option) {
    case "sumar": 
        console.log(number1 + number2);
        break;
    case "restar":
        console.log(number1 - number2);
        break;
    case "multiplicar":
        console.log(number1 * number2);
        break;
    case "dividir":
        console.log(number1 / number2);
        break;
    default:
        console.log("Operación no válida");
}

const orderStatus = "enviado";

switch (orderStatus) {
    case "pendiente": 
        console.log("El pedido está siendo preparado.");
        break;
    case "enviado":
        console.log("El pedido está en camino.");
        break;
    case "entregado":
        console.log("El pedido fue entregado.");
        break;
    case "cancelado":
        console.log("El pedido fue cancelado.");
        break;
    default:
        console.log("Pedido no existente");
}

/* Septima parte - Nivel 7 */

const value = 7.68;

console.log(Math.round(value));
console.log(Math.floor(value));
console.log(Math.ceil(value));
console.log(Math.trunc(value));

/* 
Math.round -> Este método redondea mayor o igual a 5 para arriba, menor a 5 para abajo
Math.floor -> Este método redondea para abajo
Math.ceil -> Este método redondea para arriba
Math.trunc -> Este método quita la parte decimal
*/

const randomNumber = Math.floor(Math.random() * 10) + 1;

if (randomNumber % 2 === 0) {
    console.log("El número es par")
} else {
    console.log("El número es impar")
}

console.log(randomNumber);

const dado = Math.floor(Math.random() * 6) + 1;

console.log(`El dado cayó en: ${dado}`);

const originalPrice = 200;
const min = 5;
const max = 20;
const descPrice = Math.floor(Math.random() * (max - min + 1)) + min;
const discountAmount = originalPrice * (descPrice/100);
const finalPrice1 = originalPrice - discountAmount;

console.log(`Porcentaje obtenido: ${descPrice}%`);
console.log(`Monto descontado: ${discountAmount.toFixed(2)}`);
console.log(`Precio Final: ${finalPrice1.toFixed(2)}`);

/* Octava - Nivel 8 */

const a = 18;
const b = 42;
const c = 27;

if (a >= b && a >= c) {
  console.log(`El número mayor es: ${a}`);
} else if (b >= a && b >= c) {
  console.log(`El número mayor es: ${b}`);
} else {
  console.log(`El número mayor es: ${c}`);
}

if (b !== a && c !== a && b !== c) {
    console.log("Todos los números son diferentes");
} else {
    console.log(`No todos los números son diferentes`);
}

const year = 2028;

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(`${year} es un año bisiesto`);
} else {
    console.log(`${year} no es un año bisiesto`);
}

const purchaseAmount = 120;
const isPremiumCustomer = false;

if (isPremiumCustomer || purchaseAmount >= 150) {
    console.log(`Compra: S/${purchaseAmount} Envío: Gratis Total: S/${purchaseAmount}`);
} else if (purchaseAmount >= 100) {
    console.log(`Compra: S/${purchaseAmount} Envío: S/10 Total: S/${purchaseAmount + 10}`);
} else {
    console.log(`Compra: S/${purchaseAmount} Envío: S/20 Total: S/${purchaseAmount + 20}`);
}

const password1 = "Java2026";

if (password1 !== null && password1 !== undefined && password1 !== "" && password1.length >= 8) {
    console.log("Contraseña valida");
} else {
    console.log("Contraseña no valida");
}

/* Noveno - Nivel 9 */

const balance = 1000;
const withdrawalAmount = 350;
const isAccountActive = true;
const saldoRestante = balance - withdrawalAmount;

if (!isAccountActive) {
  console.log("Cuenta inactiva");
} else if (withdrawalAmount <= 0) {
  console.log("El monto debe ser mayor que 0");
} else if (withdrawalAmount % 10 !== 0) {
  console.log("El monto debe ser múltiplo de 10");
} else if (withdrawalAmount > balance) {
  console.log("Saldo insuficiente");
} else {
  const saldoRestante = balance - withdrawalAmount;

  console.log(`Retiro exitoso.
Saldo anterior: S/${balance}
Monto retirado: S/${withdrawalAmount}
Saldo restante: S/${saldoRestante}`);
}

const parkedHours = 7;
let totalPrice;


if (parkedHours <= 0 ) {
    console.log("Cantidad de horas inválida.");
} else if (parkedHours === 1) {
    totalPrice = 5;
} else if (parkedHours <= 3) {
    totalPrice = 5 + (parkedHours - 1) * 3;
} else {
    totalPrice = 11 + (parkedHours - 3) * 2;
    if (totalPrice > 25) {
        totalPrice = 25;
}
}

if (parkedHours > 0) {
  console.log(`Total a pagar: S/${totalPrice}`);
}

const workedHours = 52;
const hourlyRate = 10;
const horaNormal = 40;
const pagoNormal = workedHours * hourlyRate;
const horaExtra = workedHours - horaNormal; 
const sueldoNormal = horaNormal * hourlyRate
const sueldoExtra = horaExtra * 1.5 * hourlyRate;
const pagoTotal = sueldoNormal + sueldoExtra;

if (workedHours < 0 ) {
    console.log("Cantidad de horas inválida.");
} else if (workedHours <= horaNormal) {
    console.log(`
                 Horas normales: ${workedHours} 
                 Horas extras: 0 
                 Pago normal: S/${pagoNormal} 
                 Pago extra: S/0 
                 Pago Total:${pagoNormal}
                 `);
} else {
    console.log(`
                 Horas normales: ${horaNormal} 
                 Horas extras: ${horaExtra} 
                 Pago normal: S/${sueldoNormal} 
                 Pago extra: S/${sueldoExtra} 
                 Pago Total:${pagoTotal}
                 `);
}

const grade1 = 15;
const grade2 = 12;
const grade3 = 18;
const invalidoGrade =
  grade1 < 0 || grade1 > 20 ||
  grade2 < 0 || grade2 > 20 ||
  grade3 < 0 || grade3 > 20;

if (invalidoGrade) {
    console.log("Existe una nota invalida");
} else {
    const promedio = (grade1 + grade2 + grade3) / 3;
    
    if (promedio < 11) {
    console.log("Desaprobado");
    } else if (promedio < 13) {
    console.log("Aprobado");
    } else if (promedio < 15) {
    console.log("Bueno");
    } else if (promedio < 18) {
    console.log("Muy Bueno");
    } else {
    console.log("Excelente");
    }
}

const playerChoice = "piedra";
const computerNumber = Math.floor(Math.random() * 3) + 1;

let computerChoice;

switch (computerNumber) {
    case 1:
        computerChoice = "piedra";
        break;
    case 2:
        computerChoice = "papel";
        break;
    case 3:
        computerChoice = "tijera";
        break;
}

if (playerChoice === computerChoice) {
    console.log("Empate");
} else if ((playerChoice === "piedra" && computerChoice === "tijera") ||
  (playerChoice === "papel" && computerChoice === "piedra") ||
  (playerChoice === "tijera" && computerChoice === "papel")) {
    
    console.log("Gano el jugador");

} else {
    console.log("Ganó la computadora");
}

console.log(computerNumber);
console.log(computerChoice);