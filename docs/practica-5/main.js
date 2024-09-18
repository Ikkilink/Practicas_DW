let productos = [
    {nombre: "Camiseta", precio: 15, stock: 10},
    {nombre: "Pantalon", precio: 10, stock: 20},
    {nombre: "Falda", precio: 20, stock: 5},
];
//2
let carrito = [];
function agregarCarrito(productoNombre, cantidad)
{
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
agregarCarrito("Pantalon",3);
agregarCarrito("Pantalon",3);
agregarCarrito("Pantalon",20);