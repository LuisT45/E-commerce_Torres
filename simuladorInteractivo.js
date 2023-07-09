const productosSeleccionados = [];


function agregarAlCarrito(producto) {
    productosSeleccionados.push(producto);
    console.log("Producto agregado al carrito: " + producto.nombre);
  }

  while (true) {
    let nombreProducto = prompt("¿Qué desea comprar?");
    let precioProducto = prompt("Ingrese el precio del producto:");
  
    if (nombreProducto === "" || precioProducto === "") {
      alert("No ingresó todos los datos del producto");
      continue; // Si no se ingresaron todos los datos, se vuelve a solicitar
    }
  
    const producto = {
      nombre: nombreProducto,
      precio: parseFloat(precioProducto),
    };
  
    agregarAlCarrito(producto);
  
   
    let confirmacion = confirm("¿Desea agregar más productos al carrito?");
  
    if (!confirmacion) {
      break; // Si no se desea agregar más productos, se termina el ciclo
    }
  }


  function calcularPrecioTotal() {
    let precioTotal = 0;
  
    for (let producto of productosSeleccionados) {
      const precioProducto = 200 * 1.21; // Precio del producto * IVA
      precioTotal += precioProducto;
    }
  
    return precioTotal;
  }
  
  console.log("Productos seleccionados: " + productosSeleccionados);
  console.log("Precio total: $" + calcularPrecioTotal().toFixed(2));