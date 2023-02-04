const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const copia = document.querySelector(".copiar");
const refresh = document.querySelector(".refresh");
const instrucciones = document.querySelector(".instrucciones");
const ayuda = document.querySelector(".boton-instrucciones");
copia.style.display = "none";
refresh.style.display = "none";
instrucciones.style.display = "none";


function validarTexto(){
    let textoEscrito = document.querySelector(".text-area").value;
    let validador = textoEscrito.match(/^[a-z]*$/);

    if(!validador) {
        alert("Solo se permitimen letras minúsculas y no se permiten caracteres especiales ni numeros.");
        location.reload();
        return true;
    }
        else if(validador == 0){
        alert("Escribe la palabra que quieras encriptar o desencriptar.");
        location.reload();
        return true;
    }
}


function botonEncriptar(){
    if(!validarTexto()) {
        const textoEncriptado = encriptar(textArea.value)
        mensaje.value = textoEncriptado;
        mensaje.style.backgroundImage = "none";
        textArea.value = "";
        copia.style.display = "block";
        refresh.style.display = "block";
    }
}

/*
 LLAVES DE INCRIPTACION:
 La letra "e" es convertida para "enter".
 La letra "i" es convertida para "imes".
 La letra "a" es convertida para "ai".
 La letra "o" es convertida para "ober".
 La letra "u" es convertida para "ufat".
*/


function encriptar(stringEncriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptada
}



function botonDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
}


function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1] , matrizCodigo[i][0])

        }
    }
    return stringDesencriptada
}

function copiar(){
    navigator.clipboard.writeText(mensaje.value);
    alert("Texto copiado");
    mensaje.value = ""; 
}

function mostrarAyuda(){
instrucciones.style.display = "block";
refresh.style.display = "block";
ayuda.style.display = "none";
}