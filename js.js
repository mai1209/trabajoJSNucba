//Ejercicio 1: 

let numero = 8;

 for (let i = 1; i <= numero; i++) {
    if (i % 2 === 0) {
    // console.log(`${i} es par`);
    }
}
  
//Ejercicio 2:


let numero2 = 4

for (let i = 1; i <= 10; i++) {
 if (i > numero2){
  //  console.log(`${i} es mayor que ${numero2}`)
} else if (i < numero2){
    //console.log(`${i} es menor que ${numero2}`)
}else {
    //console.log(`${i} es igual que ${numero2}`)
}

}

//Ejercicio 3: Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5.

let number = 30;

if (number % 5 === 0){
   // console.log(`${number} es multiplo de 5`)
}

//Ejercicio 4:  
let numero3 = 20

for (let i = 0; i <= numero3; i++) {
  
  //  console.log(i)
    
}

//ejercicio 5: 
number = 7;
palabra = 'palabra'

for (let i = 1; i <= number; i++){
 //   console.log(palabra)
}


//ejercico 6:6 - Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array.

let array = ['lunes', 'martes' , 'miercoles' , 'jueves' ]


for (let letra of array) {
  //.log(letra)
  
}

//ejercicio 7 - Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array, menos el que se encuentre en la 5ta posición del mismo. Ayuda: Recuerden que el primer índice de un array es "0

let numbers10 = [1 , 2 , 3 , 4, 5, 6, 7, 8, 9, 10]

for (  let number10 of numbers10 ){
  if (number10 === 5){
    continue;
  }

  //console.log (number10)
}

//ejercicio 8;8 - Crea una función que reciba un array de números y un número por parámetro e imprima por consola cada número del array multiplicado por el número pasado por parámetro.

let numbersx = [1 , 2 , 3 , 4, 5, 6, 7, 8, 9, 10]
let multiplicar = 2

for (  let numberx of numbersx ){
 console.log (` ${numberx} * ${multiplicar} = ${numberx * multiplicar}`)
}



