

document.getElementById('dniForm').addEventListener('submit', function (e) {
    e.preventDefault(); 

    var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
    var dniNumber = document.getElementById('dniNumber').value.trim();
    var dniLetter = document.getElementById('dniLetter').value.trim().toUpperCase();
    
    
    
    if(dniNumber ===""){
        alert("Por favor, ingresa un número valido.");
    
    }else if(isNaN(dniNumber)){
        alert("Por favor ingresa un número valido sin espacios o carácteres especiales y no letras.")
        return;
    
    }else if (dniNumber < 0 || dniNumber > 99999999) {
        alert("El número de DNI no es válido." + "\n" +
            "Debe ser mayor o igual a 0 y menor o igual a 99999999."
        );
        return;
    }
    
   
    if(dniLetter === ""){
        alert("Por favor ingresa una letra valida.")
    
    }else if (!isNaN(dniLetter) && dniLetter !=="") {
        alert("La letra no es válida. Solo debe ser una letra.");
        
        
    }else if (dniLetter.length !== 1){
        alert("Solo debe ser una letra")
        return;
    }

   
    var letraCalculada = letras[dniNumber % 23];

    
    if (letraCalculada !== dniLetter && dniLetter !=="" && !isNaN(dniNumber) && dniNumber> 0 && dniNumber < 99999999) {
        alert("Letra no es valida.");
        return;
    }
    // Caso correcto
    if(letraCalculada == dniLetter && dniNumber !==""){
        alert("El número y la letra del DNI son validos.");
        return;
    }
});
