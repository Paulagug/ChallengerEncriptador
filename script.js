const campoTexto=document.querySelector(".input-text");
const campoMensaje=document.querySelector(".mensaje");
const imagen = document.getElementById("imagen");  // obtenemos la imagen seleccionandola con su id añadele el id a la imagen con id="imagen"
const p = document.getElementById("mostrarTexto"); // obtenemos el parrafo en donde se muestran los mensajes con el id mostrarTexto

function btnEncriptar(){
    const textoEncriptado=encriptar(campoTexto.value);
  imagen.style.display = "none" // le cambiamos el display a none para que se oculte, añade display:none; a la img
    p.innerText = textoEncriptado; // cambiamos su valor innerText a textoEncriptado
    campoTexto.value="";
    
}

function btnDesEncriptar(){
    const textoEncriptado=desEncriptar(campoTexto.value);
    p.innerText = textoEncriptado;
    campoTexto.value="";
}

function encriptar(stringEncriptado){

    let matrizCodigo=[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptado=stringEncriptado.toLowerCase();

    for(let i=0;i<matrizCodigo.length;i++){
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado=stringEncriptado.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
        }

    }
    return stringEncriptado;
}

function desEncriptar(stringDesEncriptado){

    let matrizCodigo=[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesEncriptado=stringDesEncriptado.toLowerCase();

    for(let i=0;i<matrizCodigo.length;i++){
        if(stringDesEncriptado.includes(matrizCodigo[i][1])){
            stringDesEncriptado=stringDesEncriptado.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0]);
        }

    }
    return stringDesEncriptado;
}

function copiar(){
   
    navigator.clipboard.writeText(p.innerText);//le decimos que escriba en el clipboard la informacion innerText del parrafo
    campoMensaje.value="";
    }