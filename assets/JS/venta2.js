const propiedades_venta = [
  {
    nombre: 'Apartamento de lujo en zona exclusiva',
    src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
    descripcion:
      'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
    ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
    habitaciones: 4,
    baños: 4,
    costo: 5000,
    smoke: false,
    pets: true,
  },
  {
    nombre: 'Apartamento acogedor en la montaña',
    src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
    descripcion:
      'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
    ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
    habitaciones: 2,
    baños: 1,
    costo: 1200,
    smoke: true,
    pets: true,
  },
];

let card = document.querySelector('#card');
card.innerHTML = `
  <div id="card">
  <img src=${
    propiedades_venta[0].src
  } class="card-img-top" alt="Imagen del departamento"/>
  <h5 class="card-title">${propiedades_venta[0].nombre}</h5>
  <p class="card-text">${propiedades_venta[0].descripcion}</p>
  <p><i class="fas fa-map-marker-alt"></i>${propiedades_venta[0].ubicacion}</p>
  <p><i class="fas fa-bed"></i> ${
    propiedades_venta[0].habitaciones
  } Habitaciones |<i class='fas fa-bath'></i> ${
  propiedades_venta[0].baños
} Baños</p>
  <p><i class="fas fa-dollar-sign"></i> ${propiedades_venta[0].costo}</p>
  
  <p class=${
    propiedades_venta[0].smoke == true ? 'text-success' : 'text-danger'
  }><i ${
  propiedades_venta[0].smoke == true
    ? 'class="fas fa-smoking"'
    : 'class="fas fa-smoking-ban"'
}></i> ${
  propiedades_venta[0].smoke == true ? 'Permitido fumar' : 'No se permite fumar'
}</p>
  
  
  <p class=${
    propiedades_venta[0].pets == true ? 'text-success' : 'text-danger'
  }><i ${
  propiedades_venta[0].pets == true
    ? 'class="fas fa-paw"'
    : 'class="fa-solid fa-ban"'
}></i> ${
  propiedades_venta[0].pets == true
    ? 'Mascotas permitidas'
    : 'No se permiten mascotas'
}</p>
  </div>`;
