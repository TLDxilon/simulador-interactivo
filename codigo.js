
//funciones con parametros y return
function calcularIva(precioProducto){
    let precioConIva = precioProducto * 1.21;
    //console.log("El precio con iva es $" +precioConIva);
    return precioConIva;
}

//Calcular precio total compra

function totalPrecio(precioProducto, cantidadProducto, gastoEnvio) {
  
  //calculo el total a pagar
  return (precioProducto * cantidadProducto) + gastoEnvio;
}

let gastoEnvio = 3; //precio en euros


//en este caso se lo pido por prompt
let precioProducto = parseFloat(calcularIva(prompt("Ingresa precio del producto")));
let cantidadProducto = parseInt(prompt("Ingresa las unidades"));


//Si el total del precio es mayor a 100 los gastos serán gratis
//Quería hacer esto pero no sé en qué momento debo ponerlo que no me sale
// if(precioTotal > 100){
//     gastoEnvio = 0;
// }

//llamamos a la funcion y luego mostramos el precio final por alert
let precioTotal = totalPrecio(precioProducto, cantidadProducto, gastoEnvio);


alert("El precio total de la compra es " + precioTotal);

