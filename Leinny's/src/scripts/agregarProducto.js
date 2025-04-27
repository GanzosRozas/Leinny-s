const mesaID = localStorage.getItem("Mesa")||"Mesa_default"
let prod = JSON.parse(localStorage.getItem(mesaID)) || [];



let posicion=prod.length


function CrearProducto(tipoProducto,nombre,precio){
switch (tipoProducto) {
    case "Hamburgesas":
        prod[posicion]=new hamburgesas(nombre,precio)
        guardarProducto()
        posicion++
        alert("Se ha guardado la hamburgesa")
        break;
    case "Bebidas":
        prod[posicion]=new bebidas(nombre,precio)
        guardarProducto()
        posicion++
        alert("Se ha guardado la bebida")
    default:
        //window.location.href="/src/pages/extrasHamburgesa.html"
        
        break;
}

}

function irAeditar(tipoProducto,nombre,precio)
{
    window.location.href="/src/pages/extrasHamburgesa.html"
    MandarAExtras(tipoProducto,nombre,precio)
}

function MandarAExtras(tipoProducto,nombre,precio){

    localStorage.setItem("tipo",tipoProducto)
    localStorage.setItem("nombre",nombre)
    localStorage.setItem("precio",precio)

}


function productoExtra(opcion){
    tipoProducto=localStorage.getItem("tipo")
    nombre=localStorage.getItem("nombre")
    precio=JSON.parse(localStorage.getItem("precio"))
    

    switch (tipoProducto) {
        case "Hamburgesas":
            if (!prod[posicion] || !(prod[posicion] instanceof hamburgesas)) {
                // Si no existe o no es una hamburguesa, crear una nueva
                prod[posicion] = new hamburgesas(nombre, precio);
               
            }
            
            agregarExtras(opcion)
            
            guardarProducto()
        
            break;
        default:
           
            
            break;
}
}





function guardarProducto(){
    localStorage.setItem(mesaID,JSON.stringify(prod))
    
}

