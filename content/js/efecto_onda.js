$(document).ready(function() {
    $(".ripple-btn").click(function(e){
      var rippler = $(this);
  

      // create .ink element if it doesn't exist
      if(rippler.find(".ink").length == 0) {
        rippler.append("<span class='ink'></span>");
      }
  
      var ink = rippler.find(".ink");
  
      // prevent quick double clicks
      ink.removeClass("animate");
  
      // set .ink diametr
      if(!ink.height() && !ink.width())
      {
        // use rippler's width or height whichever is larger for the diameter to make a circle which can cover the entire element.
        var d = Math.max(rippler.outerWidth(), rippler.outerHeight());
        ink.css({height: d, width: d});
      }
  
      // get click coordinates
      var x = e.pageX - rippler.offset().left - ink.width()/2;
      var y = e.pageY - rippler.offset().top - ink.height()/2;
  
      // set .ink position and add class .animate
      ink.css({
        top: y+'px',
        left:x+'px'
      }).addClass("animate");

    })
  });


  document.getElementById("enlace_proyectos").addEventListener("click", function(event) {
    // Prevenir el comportamiento predeterminado del enlace
    event.preventDefault();
    var enlace = document.getElementById("enlace_proyectos").href = "../../views/proyectos.html";
    // Agregar un retraso de 1 segundo antes de cambiar la ubicación
    setTimeout(function() {
        // Cambiar la ubicación del enlace después de 1 segundo
        window.location.href = enlace;
    }, 1000); // 1000 milisegundos = 1 segundo
});