let menuVisible = false;

function mostrarMenuYOcultar(){
    if(menuVisible){
        document.getElementById("nav").classList="";
        menuVisible=false;
    }else{
        document.getElementById("nav").classList="responsive";
        menuVisible=true;
    }
}

function seleccionar(){
    document.getElementById("nav").classList="";
    menuVisible=false;   
}

function muestraMensaje(){
    console.log("Descargando CV");
}



