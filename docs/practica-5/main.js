let productos = [
    {nombre: "Camiseta", precio: 15, stock: 10},
    {nombre: "Pantalon", precio: 50, stock: 20},
    {nombre: "Falda", precio: 20, stock: 5},
];
//2
let carrito = [];
function agregarCarrito(productoNombre, cantidad){
for (let producto of productos) {
    if (producto.nombre === productoNombre)
    {
        if(producto.stock >= cantidad )
        {
            carrito.push({
                nombre:productoNombre,
                cantidad:cantidad,
                precio:producto.precio,

            });

            producto.stock -= cantidad;
            console.info(`${cantidad}${productoNombre}(s) agregado(s) al carrito`);
        }
        else{
            console.error(`No hay suficiente stock de ${producto.nombre}`);
        }
        return;
    }
   
}
console.error(`El producto "${productoNombre}" no existe`);
}
//3
function calcularTotal() {
    let total = 0;
    for (let item of carrito) {
      total += item.precio * item.cantidad;
    }
    return total;
  }
function aplicarDescuento(total){
    if(total>= 100)
    {
        return total*.9;
    }
}
function procesarcompra(){
    console.log("Procesando compra . . .")
    setTimeout(function(){
         let total = calcularTotal();
         total = aplicarDescuento(total);
         console.log(`Compra completada. Total a pagar: $${total.toFixed(2)}`);
    },3000);
}
function quitarproducto()
{
    carrito.splice(2,carrito.length);
    console.log(carrito);

}
function ProcesarCompra()
{
    console.log("Procesando compra")
    setTimeout(() =>
    {
        console.log("3")
    },2000);
    setTimeout(() =>
    {
        console.log("2")
    },4000);
    setTimeout(() =>
    {
        console.log("1")
    },6000);    
    setTimeout(function(){
        let total = calcularTotal();
        total = aplicarDescuento(total);
        console.log(`Compra completada. Total a pagar: $${total.toFixed(2)}`);
   },8000);   
}

agregarCarrito("Pantalon",3);
agregarCarrito("Pantalon",3);
agregarCarrito("Pantalon",3);
quitarproducto();
console.log(carrito);
procesarcompra();
ProcesarCompra();