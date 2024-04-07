  //agrego un manejo de contenido segun el logo que presione en la barra de navegacion deslizante
  document.getElementById('compartir').addEventListener('click', function() {
    document.getElementById('share').style.display = 'flex';
    document.getElementById('modal-header-share').style.display = 'flex';
    document.getElementById('code').style.display = 'none';
    document.getElementById('modal-header-code').style.display = 'none';
    });

    document.getElementById('qr').addEventListener('click', function() {
      document.getElementById('share').style.display = 'none';
      document.getElementById('modal-header-share').style.display = 'none';
      document.getElementById('code').style.display = 'flex';
      document.getElementById('modal-header-code').style.display = 'flex';
    });