const texto = document.querySelector(".Texto");

texto.addEventListener("keypress", function(e){
    if (!Ver(e)){
        e.preventDefault();
    }
})

function Ver(e) {    
    const llave = String.fromCharCode(e.keyCode);
    const palabras = '[a-z- ]';

    if(llave.match(palabras)){
        console.log(llave);
        return true;
    }
}