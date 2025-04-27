const { jsPDF } = window.jspdf; // ← importar jsPDF

// Primero obtienes el ul donde vas a poner todo
let listaCuenta = document.getElementById("listaCuenta");

// Limpias la lista por si ya había algo
listaCuenta.innerHTML = "";

// Ahora agregas cada dato como un <li>
let ganancias = JSON.parse(localStorage.getItem("Ganancias")) || [];
let totalPedidos = ganancias.length;

let montoTotal = ganancias.reduce((acumulador, monto) => acumulador + monto, 0);

let propina = JSON.parse(localStorage.getItem("Propinas")) || [];
let propinasTotales = propina.reduce((acumulador, monto) => acumulador + monto, 0);

let promedioPorMesa = totalPedidos > 0 ? (montoTotal / totalPedidos).toFixed(2) : 0;

let ordenMasBarata = ganancias.length > 0 ? Math.min(...ganancias) : 0;
let ordenMasCara = ganancias.length > 0 ? Math.max(...ganancias) : 0;

let fechaCorte = new Date().toLocaleString();

// Función auxiliar para crear y agregar un <li>
function agregarItem(texto) {
    let li = document.createElement("li");
    li.className = "list-group-item";
    li.textContent = texto;
    listaCuenta.appendChild(li);
}

// Agregamos los datos
agregarItem(`Total de órdenes pagadas: ${totalPedidos}`);
agregarItem(`Monto total ganado: $${montoTotal.toFixed(2)}`);
agregarItem(`Propinas totales (Divididas entre todo el personal a partes iguales): $${propinasTotales.toFixed(2)}`);
agregarItem(`Promedio por mesa: $${promedioPorMesa}`);
agregarItem(`Orden más barata: $${ordenMasBarata}`);
agregarItem(`Orden más cara: $${ordenMasCara}`);
agregarItem(`Fecha de corte: ${fechaCorte}`);


function generarCorte() {
  const datosCorte = {
    totalPedidos: totalPedidos,
    montoTotal: montoTotal,
    propinasTotales: propinasTotales,
    promedioPorMesa: promedioPorMesa,
    ordenMasBarata: ordenMasBarata,
    ordenMasCara: ordenMasCara,
    fechaCorte: fechaCorte
};

// Para exportar a PDF
pdf(datosCorte)

// Para exportar a Excel
excel(datosCorte)


}
function pdf(datosCorte){
  const reportePDF = new Reporte(new ExportadorPDF());
  reportePDF.generar(datosCorte);
}
function excel(datosCorte){
  const reporteExcel = new Reporte(new ExportadorExcel());
  reporteExcel.generar(datosCorte);
}
function limpiar(){
  
  localStorage.removeItem("Ganancias")
  localStorage.removeItem("Propinas")
  listaCuenta.innerHTML=""
  window.location.reload()
  window.location.href = "/public/index.html"; 
}
