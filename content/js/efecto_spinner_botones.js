//aqui estoy creando eventos para cada que le doy click a mis botones de contacto para simular un
                                  //proceso de carga del boton (solo simula)
                                  document.getElementById('spinner-view1').style.display = 'none';
                                  document.getElementById('spinner-view2').style.display = 'none';
                                  document.getElementById('spinner-view3').style.display = 'none';

                                document.getElementById('call').addEventListener('click',function() {
                                  document.getElementById('llamar').style.display = 'none';
                                  document.getElementById('spinner-view1').style.display = 'flex';
                                  document.getElementById('spinner-view1').style.marginTop = '25px';
                                  setTimeout(function() {
                                  document.getElementById('spinner-view1').style.display = 'none';
                                  document.getElementById('llamar').style.display = 'inline-block';
                                  }, 2500);
                                });

                                document.getElementById('mail').addEventListener('click', function() {
                                  document.getElementById('correo').style.display = 'none';
                                  document.getElementById('spinner-view2').style.display = 'flex';
                                  document.getElementById('spinner-view2').style.marginTop = '25px';
                                  setTimeout(function() {
                                  document.getElementById('spinner-view2').style.display = 'none';
                                  document.getElementById('correo').style.display = 'inline-block';
                                  }, 2500);
                                });

                                document.getElementById('wpp').addEventListener('click',function() {
                                  document.getElementById('mensaje').style.display = 'none';
                                  document.getElementById('spinner-view3').style.display = 'flex';
                                  document.getElementById('spinner-view3').style.marginTop = '25px';
                                  setTimeout(function() {
                                  document.getElementById('spinner-view3').style.display = 'none';
                                  document.getElementById('mensaje').style.display = 'inline-block';
                                  }, 2500);
                                });