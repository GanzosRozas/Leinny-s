const imagenes=document.querySelectorAll('.table img')
const popup=document.getElementById('popup')
const overlay=document.getElementById('overlay')
const popupTexto = document.getElementById("popupTexto");
let mesaSeleccionada = null;


imagenes.forEach(img => {
    img.addEventListener("click", () => {
      mesaSeleccionada = img.dataset.id; // Guardamos el ID de la mesa
      popupTexto.textContent = `¿Qué quieres hacer con la mesa ${mesaSeleccionada}?`;
      popup.style.display = "block";
      overlay.style.display = "block";
    });
  });


function cerrarPopup(){
    popup.style.display="none"
    overlay.style.display="none"
}

function ocuparMesa(){
let mesaSeleccionada=localStorage.getItem("Mesa")
if(!mesaSeleccionada) return
let estado=JSON.parse(localStorage.getItem("EstadosMesas"))||{}
estado[mesaSeleccionada]="ocupada"
localStorage.setItem("EstadosMesas",JSON.stringify(estado))

actualizarImagen(mesaSeleccionada,"ocupada")  
}

function desocuparMesa(){
  let mesaSeleccionada = localStorage.getItem("Mesa")
  if(!mesaSeleccionada) return

  let estados=JSON.parse(localStorage.getItem("EstadosMesas"))||{}
  estados[mesaSeleccionada]="libre"
  localStorage.setItem("EstadosMesas",JSON.stringify(estados))
  actualizarImagen(mesaSeleccionada,"libre")
  cerrarPopup()
}


function actualizarImagen(NumMesa,estado){
  const imgClass =`.imgMesa${NumMesa}`
  const img=document.querySelector(imgClass)
  if(img){
    const nuevaSrc=estado==="ocupada"
    ?"/public/img/tableBusy.png"
    :"/public/img/tableAble.png"
    img.setAttribute("src",nuevaSrc)
  }
  else {
    console.error("No se encontró la imagen con la clase: " + imgClass);
  }
}



function cargarEstadosMesas(){
  const estados= JSON.parse(localStorage.getItem("EstadosMesas"))||{}
  for(let numMesa in estados)
  {
    actualizarImagen(numMesa,estados[numMesa])
  }
}

function irPagar(){
  window.location.href = "../src/pages/cuenta.html"; 
}


function irMenu(){
 // Aquí podrías redirigir, si quieres:
        ocuparMesa()
          window.location.href = "../src/pages/menu.html"; 
}

 imagenes.forEach(img => {
        img.addEventListener('click', () => {
          const id = img.dataset.id;
          localStorage.setItem("Mesa", id);
          console.log("Mesa guardada en localStorage:", id);
      
         
        });
      }); 

 document.addEventListener("DOMContentLoaded",cargarEstadosMesas)     

      
