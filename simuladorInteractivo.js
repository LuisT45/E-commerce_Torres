let producto1        = prompt('¿Qué desea comprar?')
const precioProducto = 200 * 1.21 //Precio del producto * IVA 
if(producto1 === " "){
    alert('No ingresó ningún producto')
}
console.log('El producto selecccionado es:' + producto1)
console.log('El precio del producto seleccionado es:' + precioProducto)
