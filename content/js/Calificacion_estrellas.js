var estrellas = document.querySelectorAll('.radio');
var permiso = false;
var seleccionado ='';
var indexant = 0;
var texto = '';
var textoindex = 0;
//CUENTA TODOS LAS CLASES RADIO Y LES ASIGNA UN EVENTO DE MOUSEOVER
estrellas.forEach(function(estrella, index) {
    estrella.addEventListener("mouseover", function() {
        
        ocultarTextosCalificacion();
        mostrarTextoCalificacion(index);
        
        
    });
//QUE PASA SI LE DAMOS CLICK A UNA?
    estrella.addEventListener("click", function(index) {

        permiso = true;
        seleccionado = texto;
        indexant = textoindex;
        console.log(seleccionado,indexant);

        
    });
//QUE PASA SI SALE EL CURSOR DE LA ESTRELLA?
//SI NO HEMOS DADO CLICK, SE OCULTAN LOS TEXTOS
    estrella.addEventListener("mouseout", function() {
        if(permiso == false){
        ocultarTextosCalificacion();
        }
        if(permiso == true){
            ocultarTextosCalificacion();
            console.log("mostrando..." + seleccionado);
            imprimir(seleccionado,indexant);
        }
        
    });

});

//FUNCION QUE OCULTA EL TEXTO REMOVIENDO Y COLOCANDO OCULTAR
function ocultarTextosCalificacion() {
    var textosCalificacion = document.querySelectorAll('.texto-calificacion');
    textosCalificacion.forEach(function(texto) {
        texto.classList.remove('aparecer');
        texto.classList.add('ocultar');
    });
}
//SI HE PASADO EL MOUSE POR ENCIMA DE UNA ESTRELLA, MUESTRA EL TEXTO CORREPONDIENTE AL INDEX Y LO POSICIONA DONDE SE DESEA
function mostrarTextoCalificacion(index) {
    var textosCalificacion = document.querySelectorAll('.texto-calificacion');
    var textoMostrar = textosCalificacion[index];
        texto= textoMostrar;
        textoindex= index;
    
        imprimir(textoMostrar,index);

}

function imprimir(textoMostrar,index){
    if (textoMostrar) {
        textoMostrar.classList.remove('ocultar');
        textoMostrar.classList.add('aparecer');                      

        var calificacion= document.getElementById('calificacion');

        document.getElementById(textoMostrar.id).style.position = "absolute";
        document.getElementById(textoMostrar.id).style.top = calificacion.offsetTop + 100 + "px";
        if(index == 0){document.getElementById(textoMostrar.id).style.left = calificacion.offsetLeft + 120 + "px";}
        if(index == 1){document.getElementById(textoMostrar.id).style.left = calificacion.offsetLeft + 110 + "px";}
        if(index == 2){document.getElementById(textoMostrar.id).style.left = calificacion.offsetLeft + 135 + "px";}
        if(index == 3){document.getElementById(textoMostrar.id).style.left = calificacion.offsetLeft + 120 + "px";}
        if(index == 4){document.getElementById(textoMostrar.id).style.left = calificacion.offsetLeft + 145 + "px";}
        
    }
}