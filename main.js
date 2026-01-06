/*

DESAFIO:
Ej 1 - solicitarNumero(mensaje) debera solicitar un numero por prompt y validarlo, una vez el numero sea correcto retornar el numero solicitado
    Ejemplo de uso:
    - let cantidad_notas_promedio = solicitarNumero('Ingresa un numero')

Ej 2 - solicitarNumeroPositivo(mensaje) debera solicitar un numero positivo por prompt y validarlo, una vez el numero sea correcto retornar el numero solicitado

Ej 3 - promediar(sumatoria, cantidad_numeros) retornara el promedio de la sumatoria

Ej 4 - validarNumeroPostivoEntero(valor) retornara un booleano dependiendo de si el valor cumple con la validacion

*/

// Ejercicio 1:
function comparadorResultados(){
    let valorA = Number(prompt("Ingresar primer valor a sumar: "));
    let valorB = Number(prompt("Ingresar segundo valor a sumar: "));

    if (!isNaN(valorA) && !isNaN(valorB)){
        let sumaValores = valorA + valorB;
        let pedirResultado = Number(prompt(`Cual es el resultado de esta suma ${valorA} + ${valorB}? `));
        if (pedirResultado == sumaValores){
        alert("Correcto!!!")
        }else{
            alert(`Desaprobado.... El resultado era ${sumaValores}.`)
        }   
    } else{
    alert("Los valores ingresados no so validos. Solo se permiten números");
    }
}

// Ejercicio 2:
function solicitarNumeroPositivo(){
    let numeroPositivo = Number(prompt("Ingrese un número: "));
    while (isNaN(numeroPositivo) ||  numeroPositivo < 0){
        if(isNaN(numeroPositivo)){
            alert("Esto no es un número 😠")
        }else{
            alert("Este número es NEGATIVO, intentalo otra vez.")           
        }
        numeroPositivo = Number(prompt("Ingrese un número: "));
    }
    alert(`PERFECTO!! El número es POSITIVO...`)
    return numeroPositivo;
}

//Ejercicio 3
function promedioSumatoria(){
    let cantSumar = Number(prompt("¿Cuantos números queres sumar?"));
    while(
        isNaN(cantSumar)
        ||
        cantSumar <= 1
    ){
        cantSumar = prompt("Por favor ingresar un valor valido de la cantidad de notas que quiera sumar, un dato númerico mayor a 1.");
    }

    let sumaValores = 0;
    for(let i = 1; i <= cantSumar; i++){
        let valor = Number(prompt(`Ingresar valor númerico ${i} :`));
        sumaValores = sumaValores + valor;
    }
    let promedio = sumaValores / cantSumar;
    alert (`El valor total es ${sumaValores} que por la cantidad ingresada(${cantSumar}) da como promedio ${promedio}`);
    return promedio;
}

// Ejercicio 4
function validarNumeroPositivoEntero() {
    let valor = prompt("Ingrese un valor: ");
    if (!isNaN(valor) && valor >= 0) { //Faltar agregar que solo tome valores enteros.
        alert("Perfecto!! Ingresaste un valor valido")
        return true;
    } else {
        alert("Que desaste... Ingresaste un valor que no es valido")
        return false;
    }
}

/* 
Correcciones

>> let numeroPositivo = Number(prompt("Ingrese un número: ")); 
Poner el ...Number(()); no nos deja ver el dato ingresado ya que el resultado puede dar bien pero no sabemos debido a que


*/