 function calcular() {
            // Obtener el valor de la caja de texto
            var Kilometros = document.getElementById('txtKilometros').value;
            var millas = document.getElementById('txtMillas');

            // Limpiar la caja de resultado cada vez que se presiona el botón
            millas.value = "";

            // Validación 1: Que no esté vacío
            if (Kilometros == "") {
                alert("Por favor, ingresa una distancia.");
                return; // Detiene la función
            }

            // Validación 2: Que sea un número
            if (isNaN(Kilometros)) {
                alert("El valor ingresado debe ser un número.");
                return;
            }

            // Convertir el texto a número decimal
            var K = parseFloat(Kilometros);

            // Formula que se essta aplicando M= k * 0.61371
            var M = K * 0.621371;
         

            // Resultado + la letra M
            millas.value = M.toFixed(2) + " mi";
        }