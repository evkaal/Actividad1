 function calcular() {
            // Obtener el valor de la caja de texto
            var Edad = document.getElementById('txtEdad').value;
            var Votacion = document.getElementById('txtVotacion');

            // Limpiar la caja de resultado cada vez que se presiona el botón
            Votacion.value = "";

            // Validación 1: Que no esté vacío
            if (Edad == "") {
                alert("Por favor, ingrese su edad.");
                return; // Detiene la función
            }

            // Validación 2: Que sea un número
            if (isNaN(Edad)) {
                alert("El valor ingresado debe ser un número.");
                return;
            }

            // Validación 3: que sea positivo
            if( Edad <= 0){
                alert("El valor ingresado debe ser mayor a 0");
                return;

            }


            // Formula que se essta aplicando USD = MXM * tasa de cambios
            // la tasa de cambios es de aproximadamente de 0.055
        
         if(Edad >=18){
            
            Votacion.value= "Puedes votar";
            return;
         } else {
            Votacion.value = "No puedes votar";
         }

            // Resultado + la letra M
           
        }