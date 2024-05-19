        
        
        
        export var identificador='';

        //selecciono todos mis a dentro de mi id= listica
        document.addEventListener("DOMContentLoaded", function() {
            var contenedorDiv = document.getElementById("listica");
            var enlaces = contenedorDiv.querySelectorAll("a");
            
    //dentro de esos enlaces, llamo el evento click, y si pasa el evento, ejecuto la funcion que previene el comportamiento normal
    //almaceno tambien el id del enlace que se ha seleccionado

            enlaces.forEach(function(enlace) {
                enlace.addEventListener("click", function(event) {
                    event.preventDefault();
                    var a = event.target.id;

                     identificador=a;
                     
    //despues de identificar el enlace seleccionado, recorro todos los enlaces y hago arrastrar los enlaces hasta desaparecer.
                    enlaces.forEach(function(link) {
                        link.classList.add("move");
    //hago correr tambien el mensaje inferior y superior
                        document.getElementById("regalame_comentario").classList.add("move");
                        document.getElementById("titulo_proyectos").classList.add("move");
                    });
    //entro en una funcion de tiempo que aparece mi enlace selecciondo y el formulario con id= calificacion
                    setTimeout(function() {

                        //aparece el mensaje superior
                        document.getElementById("regalame_comentario").classList.replace("move", "appear");
                        //aparece el enlace seleccionado
                        document.getElementById(a).classList.replace("move", "appear");
                        // aparecen el formulario
                        document.getElementById('calificacion').classList.replace("sinvisual","convisual");
                        document.getElementById("menu").classList.replace("a", "mostrar");

                        //asigno algunas variables para manipular la posicion de los elementos
                        var distanciaTop = 7;  
                        var distanciaLeft;

                      // realizo condiciones para asignar la distancia de los elementos en el eje horizontal
                      //segun el ancho de la frase seleccionada
                      if (a == 'proyecto2' ||  a == 'proyecto7') { distanciaLeft = 5; }
                      else if(a == 'proyecto5'){ distanciaLeft = 25;}
                      else if(a == 'proyecto3'){ distanciaLeft = 60;}
                      else if(a == 'proyecto4'){ distanciaLeft = 40;}
                      else if(a == 'proyecto6'){ distanciaLeft = 50;}
                      else { distanciaLeft = 60;}
                      //ddefino la posicion del elemento seleccionado como absoluta y lo posiciono respecto al contenedor del primer enlace 
                        document.getElementById(a).style.position = "absolute";
                        document.getElementById(a).style.top = contenedorDiv.offsetTop + distanciaTop + "px";
                        document.getElementById(a).style.left = contenedorDiv.offsetLeft + distanciaLeft + "px";
                      //hago lo mismo para el formulario de calificacion con las estrellas
                        document.getElementById("calificacion").style.position = "absolute";
                        document.getElementById("calificacion").style.top= contenedorDiv.offsetTop+ 50 +"px";
                        document.getElementById("calificacion").style.left= contenedorDiv.offsetLeft + 85 +"px";
                      //hago lo mismo para el mensaje superior
                        document.getElementById("regalame_comentario").style.position = "absolute";
                        document.getElementById("regalame_comentario").style.top= contenedorDiv.offsetTop+ -100 +"px";
                        document.getElementById("regalame_comentario").style.left= contenedorDiv.offsetLeft + 40 +"px";
                      

                        document.getElementById("menu").style.position = "relative";
                        document.getElementById("menu").style.top= 150 +"px";
                        document.getElementById("menu").style.left= 30 +"px";

                        

                    }, 1000); 
                    // todo esto pasa despues de 1 segundo

                    
                });
                
            });

            

            // doy una clase que eliina de la vista el formulario y lo posiciona en un lugar que no interfiera con el ancho
            //o alto de la pantalla
            document.getElementById('calificacion').classList.add("sinvisual");
          

            
            var ps=document.querySelectorAll('.ps');
            ps.forEach(function(p){p.style.display = 'none';});

        // cada vez que doy click a un enlace, se relaciona inmediatamente una imagen o un video que se pretenda

          for (let i = 1; i < 8; i++) {
           
            document.getElementById('proyecto'+ i).addEventListener("click", function(){
            document.getElementById('descripciones').classList.replace("a", "mostrar");
            document.getElementById('p'+i).style.display = 'flex';
              if(i==1){document.getElementById('Django').classList.replace("opacidad0", "mostrar");}
              if(i==2){document.getElementById('vue').classList.replace("opacidad0", "mostrar");}
              if(i==3){document.getElementById('Arduino').classList.replace("opacidad0", "mostrar");}
              if(i==4){document.getElementById('react').classList.replace("opacidad0", "mostrar");}
              if(i==5){document.getElementById('robotl').classList.replace("opacidad0", "mostrar");}
              if(i==6){document.getElementById('robotd').classList.replace("opacidad0", "mostrar");}
              if(i==7){document.getElementById('meca').classList.replace("opacidad0", "mostrar");}
            });
          };
        });
            
     
        

  

        document.getElementById("menu").addEventListener("click", function(){
          location.reload();
        });