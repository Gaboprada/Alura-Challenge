function encriptarTexto(){
    let texto = document.getElementById("texto").value;
    let titulomensaje = document.getElementById("titulomensaje");
    let parrafo = document.getElementById("parrafo");
    let muneco = document.getElementById("muneco");

 

    let textocifrado = texto
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");
    


    if (document.getElementById("texto").value.length !=0){
        document.getElementById("texto").value= textocifrado;
   

        titulomensaje.textContent= "texto cifrado con exito";
        parrafo.textContent="";
        muneco.src= "./assets/deadpool3.png";        
        
        

    } else {
        
        muneco.src= "./assets/advertencia.png";  
        titulomensaje.textContent= "Ningún menaje fue encontrado";
        parrafo.textContent="Ingresa el texto a encriptar o desencriptar";
        //alert(titulomensaje.textContent);
           
    }

    
}

function desencriptarTexto(){
    let texto = document.getElementById("texto").value;

     let textocifrado = texto
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");
    
    if (document.getElementById("texto").value.length !=0){
        document.getElementById("texto").value= textocifrado;
   

        titulomensaje.textContent= "texto desencriptado con exito";
        parrafo.textContent="";
        muneco.src= "./assets/deadpool3.png";        
        
        

    } else {
        
        muneco.src= "./assets/advertencia.png";  
        titulomensaje.textContent= "Ningún menaje fue encontrado";
        parrafo.textContent="Ingresa el texto a encriptar o desencriptar";
        //alert(titulomensaje.textContent);
           
    }

}

