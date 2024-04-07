
import {identificador} from './movimiento_de_enlaces_y_formulario.mjs';

export const datosFormulario = {
    estrellas: '',
    nombre: '',
    comentario: '',
    proyecto: ''
};


 document.addEventListener('DOMContentLoaded', function() {

    const formulario = document.getElementById('calificacion');
    const alerta = document.getElementById('alerta');
    alerta.style.display = 'none';
    formulario.addEventListener('submit', function(event) {

        document.getElementById('columna_1').style.pointerEvents = 'none';
        document.getElementById('columna_2').style.pointerEvents = 'none';
        document.getElementById('calificacion').style.pointerEvents = 'none';
        document.getElementById('submit').style.pointerEvents = 'none';
        document.getElementById('menu').style.pointerEvents = 'none';
        event.preventDefault();

        datosFormulario.estrellas = document.querySelector('input[name="estrellas"]:checked').value;
        datosFormulario.nombre = document.getElementById('nombre').value;
        datosFormulario.comentario = document.getElementById('coment').value;
        

        if(identificador === 'proyecto1'){datosFormulario.proyecto = "Stopgame";}
        if(identificador == 'proyecto2'){datosFormulario.proyecto = 'Streaming backoffice';}
        if(identificador == 'proyecto3'){datosFormulario.proyecto = 'Alicia';}
        if(identificador == 'proyecto4'){datosFormulario.proyecto = 'Electronics lab';}
        if(identificador == 'proyecto5'){datosFormulario.proyecto = 'Robot laberinto';}
        if(identificador == 'proyecto6'){datosFormulario.proyecto = 'Destructor';}
        if(identificador == 'proyecto7'){datosFormulario.proyecto = 'Autobloqueo';}


        alerta.style.position = 'relative';
        alerta.style.left = '75%';
        alerta.style.top = '-200px';
        alerta.style.display = 'block';  
        
    

        localStorage.setItem('miscomentarios', JSON.stringify(datosFormulario));


        const misdatos = JSON.parse(localStorage.getItem('miscomentarios'));



        console.log("nombre del proyecto:"+ misdatos.proyecto);  
        console.log("nombre:" + misdatos.nombre);
        console.log("comentario:" + misdatos.comentario);
        console.log("calificacion:" + misdatos.estrellas); 



        setTimeout(function() {
            alerta.style.display = 'none';
            window.location.href = '../index.html';
        }, 4000);
        



 
    });
});




