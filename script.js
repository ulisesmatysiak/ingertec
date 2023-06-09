var contador = {}

function imgImpar(id) {
    if (!contador[id]) {
      contador[id] = 0;
    }
    
    var counter = document.getElementById("counter-" + id);
    if (counter) {
      counter.textContent = contador[id];
    }
    
    var imgUrl = "images/box-" + id + ".png";
    var windowFeatures = "width=800,height=400,resizable=yes";
    var popup = window.open("", "_blank", windowFeatures);
    
  
    popup.document.write('<html><head><title>Popup</title></head><body style="margin: 0; padding: 0;"><img src="' + imgUrl + '" style="width: 100%; height: 100%;" /></body></html>');
    popup.document.body.style.backgroundColor = "black";
  
    popup.document.close();
  
    var okButton = popup.document.createElement("button");
    okButton.textContent = "OK";
    okButton.style.background = "black";
    okButton.style.color = "white";
    okButton.addEventListener("click", function() {
      contador[id]++;
      counter.textContent = contador[id];
    });
  
    var closeButton = popup.document.createElement("button");
    closeButton.textContent = "Cerrar";
    closeButton.style.backgroundColor = "black";
    closeButton.style.color = "white"
    closeButton.addEventListener("click", function() {
      popup.close();
    });
  
    popup.document.body.appendChild(okButton);
    popup.document.body.appendChild(closeButton);
  }



function imgPar(id) {
    if (!contador[id]) {
      contador[id] = 0;
    }
    contador[id]++;
  
    var counter = document.getElementById("counter-" + id);
    if (counter) {
      counter.textContent = contador[id];
    }
  
    abrirModal("images/box-" + id + ".png");
  }

function abrirModal(src) {
    var modalImagen = document.getElementById("modalImagen");
    var modalImagenSrc = document.getElementById("modalImagenSrc");
  
    modalImagenSrc.src = src;
    modalImagen.classList.add("show");
    modalImagen.style.display = "block";
  }
  
  function cerrarModal() {
    var modalImagen = document.getElementById("modalImagen");
  
    modalImagen.classList.remove("show");
    modalImagen.style.display = "none";
  }

  function cargarTexto() {
    var texto = new XMLHttpRequest();
    texto.onreadystatechange = function() {
      if (texto.readyState === 4) {
        if (texto.status === 200) {
          var response = JSON.parse(texto.responseText);
          var textarea = document.getElementById("textArea");
          textarea.value = response.texto;
        } else {
          console.log("Error al cargar el archivo JSON.");
        }
      }
    };
    texto.open("GET", "home.json", true);
    texto.send();
  }
  
  
  
  
  