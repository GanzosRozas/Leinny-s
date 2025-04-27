const especiales = document.getElementById("especiales")
const bebidas = document.getElementById("bebidas")

especiales.addEventListener("click",()=>{
    window.location.href="/src/pages/hamburgesas.html"
    console.log("esp")
   })

bebidas.addEventListener("click",()=>{
 window.location.href="/src/pages/bebidas.html"
 console.log("Bebidas")
})

