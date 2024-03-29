let numMayorActual = 0; // Variable para almacenar el número cercano mayor actual
let numMenorActual = 5; // Variable para almacenar el número cercano menor actual

// Mostrar los números cercanos mayor y menor al inicio
document.getElementById('numero_cercano_mayor').textContent = "Número cercano mayor: " + numMayorActual;
document.getElementById('numero_cercano_menor').textContent = "Número cercano menor: " + numMenorActual;

document.getElementById('generar_numero').addEventListener('click', function() {
    let minNumber = 1;
    let maxNumber = 5;
    let randomNumber;

    do {
        randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
    } while (randomNumber === numMayorActual || randomNumber === numMenorActual);

    document.getElementById('contenido_numero').textContent = randomNumber;
    document.getElementById('contenido_numero').style.display = 'none'; // Ocultar el número aleatorio
});

function comparar() {
    let numeroEscogido = document.getElementById("numero_escogido").value;
    let numRandom = parseInt(document.getElementById("contenido_numero").textContent);
    let resultadoLabel = document.getElementById("resultado");
    let num_menor = document.getElementById("numero_cercano_menor");
    let num_mayor = document.getElementById("numero_cercano_mayor");

    if (isNaN(numeroEscogido) || numeroEscogido === '') {
        resultadoLabel.textContent = "Debes elegir un número válido";
    } else {
        numeroEscogido = parseInt(numeroEscogido); // Convertir a número entero

        if (numRandom > numeroEscogido) {
            resultadoLabel.textContent = "El número aleatorio es mayor";
            num_menor.textContent = "Número cercano menor: " + numeroEscogido;
            numMenorActual = numeroEscogido;
        } else if (numRandom < numeroEscogido) {
            resultadoLabel.textContent = "El número aleatorio es menor";
            num_mayor.textContent = "Número cercano mayor: " + numeroEscogido;
            numMayorActual = numeroEscogido;
            
        } 
        // else if (randomNumber==0 || randomNumber==""){
        //     alert("Debe generar un numero")
        //     console.log("Debe generar un numero")
        // } 
        else {
            resultadoLabel.textContent = "¡Exacto, el número es igual!";
        }
    }
}