let detallesHTML = document.querySelector('.detalle');
console.log(detallesHTML);

let codigo = location.search;
let codigoProducto = new URLSearchParams(codigo);
let codigoSeleccionado = codigoProducto.get('codigo');



fetch('../datos/productos.json')
    .then((respuesta) => {
        return respuesta.json()
    })
    .then((detalle) => {

        for (let i = 0; i < detalle.length; i++) {
            if (detalle[i].codigo == codigoSeleccionado) {
                const sectionDetalle = document.querySelector(".detalle")
                sectionDetalle.innerHTML += `
                <div class=" detalle row " >
                <section class="py-5 text-center container">
                <div class="row py-lg-5">
                  <div class="col-lg-6 col-md-8 mx-auto">
        <div class="col text-center  rounded fw-light bg-success p-2 text-dark bg-opacity-25">
            <img src="${detalle[i].imagen}" class="rounded float-start" alt="${detalle[i].nombre}" style="width: 18rem;">
            <Section class="text-success"        >
            <h2 class="nombre ">Nombre: ${detalle[i].nombre}</h2>
            <h3 class="sabor ">Sabor: ${detalle[i].sabor}</h3>
            <h3 class="marca ">Marca: ${detalle[i].marca}</h3>
            <h5 class="linea">Linea: ${detalle[i].linea}</h5>
            <h6 class="envase">Tipo de envase: ${detalle[i].envase}</h6>
            <h6 class="tipo">Tipo de comida: ${detalle[i].comida}</h6>
            <h6 class="etapa">Para etapa: ${detalle[i].etapa}</h6>
            <h6 class="mascota">Para mascota: ${detalle[i].mascota}</h6>
            <h2 class="precio">Precio ${detalle[i].precio}</h2>
            <h4 class="peso">Peso alimento: ${detalle[i].peso}</h4>
            <h6 class="proteina">Proteinas: ${detalle[i].proteinas}</h6>
            <p class="necesidades">Tipo de necesidades: ${detalle[i].necesidades}</p>
            <p class="nutrientes">Nutrientes: ${detalle[i].nutrientes}</p>             
            <p class=" ingredientes card-text">Ingredientes: ${detalle[i].ingredientes}</p>
</section>

              </div>


                `
            }
        }
    })


    let detalleProducto = JSON.parse(localStorage.getItem('detallesProducto'))
let arrayDetalle = JSON.parse(detalleProducto[0]);

let botonRegresar = document.getElementById('botonRegresar');
botonRegresar.addEventListener('click', function(){
    localStorage.clear()
    location.href = 'index.html'})

  