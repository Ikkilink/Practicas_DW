const d = document;
const $listaCarrito = d.querySelector("#lista-carrito");
const $totalCarrito = d.querySelector("#total-carrito");
const $btnCompra = d.querySelector("#btn-compra");
const $mensajeCompra = d.querySelector("#mensaje-compra");
const $carrito = d.querySelector("#carrito");
const loading = d.querySelector("#mensaje-espera");

d.addEventListener("click", function (e) {
    if (!e.target.matches(".producto")) {
      return false;
    }
  
    //console.log(e);
    const $producto = e.target;
    let id = $producto.getAttribute("data-id");
    let nombre = $producto.getAttribute("data-nombre");
    let precio = parseFloat($producto.getAttribute("data-precio"));
    

    const $itemCarrito = d.createElement("li");

    $itemCarrito.dataset.precio = precio;
    $itemCarrito.classList.add("prod"+id);
    $itemCarrito.innerText = `${nombre} - $${precio}`;
  
    $listaCarrito.appendChild($itemCarrito);
  
    let totalActual = parseFloat($totalCarrito.innerText);
    $totalCarrito.innerText = (totalActual + precio).toFixed(2);
  });

d.addEventListener("click",function(e){
    if(e.target.matches(".producto-quitar")){
        let id = e.target.dataset.id;

        const $item = d.querySelector(".prod"+id);
        console.log($item)
        $item.remove();
        let precio = parseFloat($item.innerText.split("- $")[1]);
        
        let totalActual = parseFloat($totalCarrito.innerText);
        $totalCarrito.innerText = (totalActual - precio).toFixed(2);
    }
});
$btnCompra.addEventListener("click",function(e)
{
    if($listaCarrito.children.length > 0){
        loading.classList.remove("hidden");
        setTimeout(()=>{
            loading.classList.add("hidden");
            $mensajeCompra.classList.remove("hidden");
        },5000)
        

    }
    else{
        alert("El carrito esta vacio no se puede realzar la compra");
    }
})

