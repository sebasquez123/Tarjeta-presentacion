  //creo un evento, asigno un valor a un input lo selecciono y lo copio con javascript
  document.getElementById("copy").addEventListener("click", function() {
    var enlace = "https://2bcard.com/cb0252e51#vcard";
    var aux = document.createElement("input");
    aux.setAttribute("value", enlace);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);
    alert("Enlace copiado al portapapeles: " + enlace);
  });