
function f_encriptacion() {
    var texto = document.querySelector(".texto").value;
    
    var cambios = {
        a:"ai",
        e:"enter",
        i:"imes",
        o:"ober",
        u:"ufat"
    };

    textoEncriptado = texto.replace(/a|e|i|o|u/g, function(matched){
        return cambios[matched];
    });
  
    document.querySelector(".encriptado").innerHTML=textoEncriptado.toLowerCase();
}

function f_desencriptacion(){
    var texto = document.querySelector(".texto").value
    
    var cambios = {
        ai:"a",
        enter:"e",
        imes:"i",
        ober:"o",
        ufat:"u"
    };

    textoDesencriptado = texto.replace(/ai|enter|imes|ober|ufat/g, function(matched){
        return cambios[matched];
    });
    
    document.querySelector(".encriptado").innerHTML=textoDesencriptado.toLowerCase();
    
}

function f_copiar(){
    let texto = document.querySelector(".encriptado");
    texto.select();
    texto.setSelectionRange(0, 99999);
    document.execCommand("copy");

    alert("Se ha copiado el texto al portapapeles");
}