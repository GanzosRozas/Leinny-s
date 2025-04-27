class producto{
    constructor(nombre,precio){
        this.nombre=nombre
        this.precio=precio
    }
}

class hamburgesas extends producto{
    constructor(nombre,precio,extras){
        super(nombre,precio)
        this.extras=[]
    }
}

class bebidas extends producto{
    constructor(nombre,precio){
        super(nombre,precio)
        
    }
}



    // ===== AGREGAR EXTRAS USANDO DECORADORES =====
    function agregarExtras(opcion) {
        let index = posicion;
      
        if (!prod[index] || !Array.isArray(prod[index].extras)) {
          prod[index].extras = [];
        }
      
        switch (opcion) {
          case 1:
            extraRanch(index)
            break;
          case 2:
            extraPepinillos(index)
            break;
          default:
            break;
        }
      }
      

  function extraRanch(index) {
    prod[index].extras.push("Extra Ranch");
    prod[index].precio += 10;
    alert("Se ha agregado extra ranch");
  }
  
  function extraPepinillos(index) {
    prod[index].extras.push("Extra Pepinillos");
    prod[index].precio += 15;
    alert("Se ha agregado extra pepinillos");
  }