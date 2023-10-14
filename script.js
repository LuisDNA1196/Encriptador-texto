  
  function encriptarTexto() {
  const textoOriginal = document.getElementById("textoOriginal").value;
  const textoEncriptado = encryptText(textoOriginal);
  document.getElementById("textoEncriptado").value = textoEncriptado;
}

function desencriptarTexto() {
  const textoEncriptado = document.getElementById("textoEncriptado").value;
  const textoOriginal = decryptText(textoEncriptado);
  document.getElementById("textoEncriptado").value = textoOriginal;
}

function copiarTexto() {
  const texto = document.getElementById("textoEncriptado");
  texto.select();
  document.execCommand("copy"); 
}

/*function verificarTexto() {
  const textoOriginal = document.getElementById("textoOriginal").value;
  const botonCopiar = document.getElementById("boton-copiar");
  
  if (textoOriginal.length > 0) {
    botonCopiar.style.display = "block";
  } else {
    botonCopiar.style.display = "none";
  }
}*/

const botonEncriptar = document.getElementById('boton-encriptar');
const mensajeVacio = document.getElementById("mensaje-vacio");
const mensajeNoEncontrado = document.getElementById("mensaje-no-encontrado");
const imagenbuscar = document.getElementById("imagen-buscar");
const botonCopiar = document.getElementById("boton-copiar");

botonEncriptar.addEventListener("click", function() {
    mensajeVacio.style.display = "none";
    mensajeNoEncontrado.style.display = "none";
    imagenbuscar.style.display = "none";
    botonCopiar.style.display = "block";
  }
);

      function encryptText(text) {
        // Reemplazar letras según los parámetros especificados
        const encryptedText = text
          .replace(/e/g, "enter")
          .replace(/i/g, "imes")
          .replace(/a/g, "ai")
          .replace(/o/g, "ober")
          .replace(/u/g, "ufat");
      
        return encryptedText;
      }
      function decryptText(text) {
        // Reemplazar letras según los parámetros especificados
        const decryptedText = text
          .replace(/enter/g, "e")
          .replace(/imes/g, "i")
          .replace(/ai/g, "a")
          .replace(/ober/g, "o")
          .replace(/ufat/g, "u");
  
        return decryptedText;
      }
      