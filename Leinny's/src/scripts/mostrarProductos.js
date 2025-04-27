  // Obtener la mesa seleccionada (esto debió haberse guardado antes)
  const mesaId = localStorage.getItem("Mesa") || "mesa_default";

  // Cargar los productos guardados para esa mesa
  const pedido = JSON.parse(localStorage.getItem(mesaId)) || [];

  const listaCuenta = document.getElementById("listaCuenta");
  const totalElement = document.getElementById("total");

  let total = 0;

  pedido.forEach((producto, index) => {
    const item = document.createElement("li");
    item.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center");

    const nombre = producto.nombre;
    const precio = producto.precio;
    let extras
    if(producto.extras){

         extras = producto.extras;
    }
    else
    {
         extras =""
    }
    total += precio;

    item.innerHTML = `
      <div>
        <strong>${nombre}</strong><br>
        Extras: ${extras}
      </div>
      <span>$${precio}</span>
    `;

    listaCuenta.appendChild(item);
  });

  totalElement.textContent = total;





  let botones = document.querySelectorAll(".propina");


  function propina(porcentaje){
    botones.forEach(boton => {
    boton.disabled = true;
  });

    let propina = JSON.parse(localStorage.getItem("Propinas"))||[]
    let p = Math.round(total * (porcentaje / 100) * 100) / 100;

    let precionFinal=total+p
    propina.push(p)
    localStorage.setItem("Propinas",JSON.stringify(propina))
    console.log(typeof(precionFinal))
    totalElement.textContent=precionFinal
    console.log(propina)

  }

function personalizada(){
  let cantidad = prompt("Ingresa el porsentaje de propina:");

cantidad = parseFloat(cantidad); // Convierte el texto a número

if (!isNaN(cantidad)) {
  console.log("Cantidad ingresada:", cantidad);
  propina(cantidad)
} else {
  console.log("No ingresaste un número válido.");
}

}



  function pagar(){


    // 1. Leer la lista de ganancias (o crear un array vacío si no existe)
    let ganancias = JSON.parse(localStorage.getItem('Ganancias')) || [];

    // 2. Agregar el total actual a la lista
    ganancias.push(total);

    // 3. Guardar la nueva lista en localStorage
    localStorage.setItem('Ganancias', JSON.stringify(ganancias));

    localStorage.removeItem(mesaId);


  // Limpia el contenido de la lista de la cuenta
  const lista = document.getElementById('listaCuenta');
  lista.innerHTML = '';

  // Reinicia el total
  const monto = document.getElementById('total');
  monto.textContent = '0';

  botones.forEach(boton => {
    boton.disabled = false;
  });
  // Aviso
  alert("¡Pago realizado con éxito!");
  location.reload();
   window.location.href="/public/index.html"
  }