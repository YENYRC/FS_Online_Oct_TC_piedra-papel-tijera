const victorias = 0;
const derrotas = 0;
const empates = 0;
function jugar(opcionUsuario) {
   
    const opciones = ["Piedra", "Papel", "Tijera"];
    
    const opcionComputadora = opciones[Math.floor(Math.random() * opciones.length)];
    
    const resultado = "";
    if (opcionUsuario === opcionComputadora) {
        resultado = "¡Empate! Ambos eligieron " + opcionUsuario;
        empates = empates + 1;
    } else if (
        (opcionUsuario === "Piedra" && opcionComputadora === "Tijera") ||
        (opcionUsuario === "Papel" && opcionComputadora === "Piedra") ||
        (opcionUsuario === "Tijera" && opcionComputadora === "Papel")
    ) {
        resultado = "¡Ganaste! " + opcionUsuario + " vence a " + opcionComputadora;
        victorias = victorias + 1;
    } else {
        resultado = "¡Perdiste! " + opcionComputadora + " vence a " + opcionUsuario;
        derrotas = derrotas + 1;
    }
    
    document.getElementById("resultado").textContent = resultado;
    document.getElementById("contador").textContent = "Victorias: " + victorias + " | Derrotas: " + derrotas + " | Empates: " + empates;
}






