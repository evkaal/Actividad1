 function calcular() {
            // Obtener el valor de la caja de texto
            var Pesos = document.getElementById('txtPesos').value;
            var Dolares = document.getElementById('txtDolares');

            // Limpiar la caja de resultado cada vez que se presiona el botón
            Dolares.value = "";

            // Validación 1: Que no esté vacío
            if (Pesos == "") {
                alert("Por favor, ingresa un cantidad en pesos.");
                return; // Detiene la función
            }

            // Validación 2: Que sea un número
            if (isNaN(Pesos)) {
                alert("El valor ingresado debe ser un número.");
                return;
            }

            // Validación 3: que sea positivo
            if(Pesos <= 0){
                alert("El valor ingresado debe ser mayor a 0");
                return;

            }

            // Convertir el texto a número decimal
            var MXM = parseFloat(Pesos);

            // Formula que se essta aplicando USD = MXM * tasa de cambios
            // la tasa de cambios es de aproximadamente de 0.055
            var USD = MXM * 0.055;
         

            // Resultado + la letra M
            Dolares.value = USD.toFixed(2) + " USD";
        }