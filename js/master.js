let productosHTML = document.querySelector('.productos');

fetch('../datos/productos.json')
.then((respuesta)=>{
    return respuesta.json()
})
.then((productos)=>{
    productos.forEach(producto => {
        productosHTML.innerHTML += `
        <div >
    <div class="col">
    <div class="card border-success mb-3">
      <div class="card">
      
        <img src="${producto.imagen}" class="card-img-top mx-auto d-block" alt="${producto.nombre}" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title text-center">${producto.marca}</h5>
          <p class="card-text text-center">${producto.mascota} </p>

          <div class="d-grid gap-2 col-6 mx-auto">

          <a id='${JSON.stringify(producto)}' class="btn  btn-outline-success botonDetalle" href="detalle.html?codigo=${producto.codigo}" >Ver mas detalles</a>
</div>
</div>
        </div>
      </div>
    </div>
    </div>
        
        `
    })
    let botonDetalle = document.querySelectorAll('.botonDetalle')
   
    let arrayMiListaDeProductos
    let miObjeto
    let codigo

    botonDetalle.forEach(productoSeleccion => {
         productoSeleccion.addEventListener('click', function(e){
                          e.preventDefault()
                          let miListaDeProductos = localStorage.getItem('detallesProducto')
                          if(miListaDeProductos == null){
                              arrayMiListaDeProductos = [];
                          }else{
                              arrayMiListaDeProductos = JSON.parse(miListaDeProductos)
                          }
            arrayMiListaDeProductos.push (this.id)
            miObjeto = JSON.parse(arrayMiListaDeProductos[0])
            codigo = miObjeto.codigo
            localStorage.setItem('detallesProducto', JSON.stringify(arrayMiListaDeProductos))
            location.href = `detalle.html?codigo=${codigo}`

    })    


})
})

