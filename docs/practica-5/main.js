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
function calcularTotal(){
    let total = 0;
    for (let item of carrito) {
        total += item.precio*item.cantidad;
    }
    return total;
}
function aplicarDescuento(){
    if(total>= 100)
    {
        return total*.9;
    }
}
function procesarcompra(){
    console.log("Procesando compra . . .")
    setTimeout(function(){
         let total = calcularTotal();
         total = aplicarDescuento();
         console.log(`Su total es de $(total)`);
    },3000);
}
agregarCarrito("Pantalon",3);
agregarCarrito("Pantalon",3);
agregarCarrito("Pantalon",3);
calcularTotal();
