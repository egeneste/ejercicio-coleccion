/* BASE DE DATOS */
const tarjetas = [
  {
    id: 1,
    titulo: 'Titulo 1',
    descripcion: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    imagen: 'https://picsum.photos/250/250?random=1'
  },
  {
    id: 2,
    titulo: 'Titulo 2',
    descripcion: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    imagen: 'https://picsum.photos/250/250?random=2'
  },
  {
    id: 3,
    titulo: 'Titulo 3',
    descripcion: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    imagen: 'https://picsum.photos/250/250?random=3'
  },
  {
    id: 4,
    titulo: 'Titulo 4',
    descripcion: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    imagen: 'https://picsum.photos/250/250?random=4'
  }
]

/* TEMPLATE
<article class="tarjeta">
  <img src="** IMAGEN **" alt="** TITULO **" class="imagen__tarjeta">
  <div class="cuerpo__tarjeta">
    <h2 class="titulo__tarjeta">** TITULO **</h2>
    <p class="descripcion__tarjeta">
      ** DESCRIPCION **
    </p>
    <button class="agregar__btn" data-id="** ID **">agregar</button>
  </div>
</article>
*/

/* BUCAR EL ELEMENTO QUE CONTENDRA LAS TARJETAS */
const tarjetasContenedor = document.getElementById('tarjetasContenedor')

/* CREAR UNA FUNCION PARA PINTAR LAS TARJETAS EN EL DOM */
function pintarTarjetas () {
  let html_tarjetas = ''

  tarjetas.forEach(trjt => {

    html_tarjetas += `
      <article class="tarjeta">
        <img src="${trjt.imagen}" alt="${trjt.titulo}" class="imagen__tarjeta">
        <div class="cuerpo__tarjeta">
          <h2 class="titulo__tarjeta">${trjt.titulo}</h2>
          <p class="descripcion__tarjeta">
          ${trjt.descripcion}
          </p>
          <button class="agregar__btn" data-id="${trjt.id}">agregar</button>
        </div>
      </article>
    `
  })

  tarjetasContenedor.innerHTML = html_tarjetas;
}

/* INVOCAR LA FUNCION */
pintarTarjetas()

/* CREAR UN NUEVO ARREGLO VACIO PARA AGREGAR LAS TARJETAS A LA COLECCION */
let coleccion = []

/* BUCAR EL ELEMENTO QUE CONTENDRA LAS TARJETAS DE LA COLECCION */
const coleccionContenedor = document.getElementById('coleccionContenedor')

/* CREAR UNA FUNCION PARA PINTAR LAS TARJETAS EN LA COLECCION */
function pintarColeccion () {
  let html_colection = '';
  let miColection = [];

  for (i=0; i<coleccion.length; i++) {
    clct = tarjetas.filter(colection => colection.id == coleccion[i])
    miColection.push(clct[0])
  }

  miColection.forEach(colect => {
    
    html_colection += `
      <article class="tarjeta">
        <img src="${colect.imagen}" alt="${colect.titulo}" class="imagen__tarjeta">
        <div class="cuerpo__tarjeta">
          <h2 class="titulo__tarjeta">${colect.titulo}</h2>
          <p class="descripcion__tarjeta">
          ${colect.descripcion}
          </p>
          <button class="remover__btn" data-id="${colect.id}">remover</button>
        </div>
      </article>
    `
  })
  coleccionContenedor.innerHTML = html_colection;
}

/* INVOCAR LA FUNCION */
pintarColeccion()

/* CREAR UNA FUNCION PARA AGREGAR UNA TARJETA A LA COLECCION */
function agregarTarjeta (id) {
  coleccion.push(id)
}

/* CREAR UNA FUNCION PARA REMOVER UNA TARJETA A LA COLECCION */
function removerTarjeta (id) {
  filteredColection = coleccion.filter(cld => cld != id);
  coleccion = filteredColection
}

/* UTILIZAR EL DELEGADOR DE EVENTOS PARA AGREGAR LAS TARJETAS A LA COLECCION */
tarjetasContenedor.addEventListener('click', (e) => {
  e.preventDefault()
  
  tjt_id = e.target.dataset.id
  
  if (!coleccion.includes(tjt_id))
  {
    coleccion.push(e.target.dataset.id)
  }
  else 
  {
    alert(`La tarjeta con id: ${tjt_id} ya esta agragada!`)
  }
  

  /* IMPORTANTE VOLVER A INVOCAR LA FUNCION PARA REFRESCAR LA COLECCION */
  pintarColeccion()
})

/* UTILIZAR EL DELEGADOR DE EVENTOS PARA REMOVER LAS TARJETAS DE LA COLECCION */
coleccionContenedor.addEventListener('click', (e) => {

  e.preventDefault();
  let _id = e.target.dataset.id
  removerTarjeta(_id)
  /* IMPORTANTE VOLVER A INVOCAR LA FUNCION PARA REFRESCAR LA COLECCION */
  pintarColeccion()
})
