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
    pets: false,
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
  {
    nombre: 'Penthouse de lujo con terraza panorámica',
    src: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
    descripcion:
      'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
    ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
    habitaciones: 3,
    baños: 3,
    costo: 4500,
    smoke: false,
    pets: true,
  },
  {
    nombre: 'Hermosa casa en la playa',
    src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
    descripcion:
      'Una hermosa casa en la playa para disfrutar con la familia en las playas de México',
    ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
    habitaciones: 3,
    baños: 3,
    costo: 4500,
    smoke: true,
    pets: false,
  },
];

for (i in propiedades_venta) {
  let info = '';
  info += `
  <div id="card">
  <img src=${
    propiedades_venta[i].src
  } class="card-img-top" alt="Imagen del departamento"/>
  <h5 class="card-title">${propiedades_venta[i].nombre}</h5>
  <p class="card-text">${propiedades_venta[i].descripcion}</p>
  <p><i class="fas fa-map-marker-alt"></i>${propiedades_venta[i].ubicacion}</p>
  <p><i class="fas fa-bed"></i> ${
    propiedades_venta[i].habitaciones
  } Habitaciones |<i class='fas fa-bath'></i> ${
    propiedades_venta[i].baños
  } Baños</p>
  <p><i class="fas fa-dollar-sign"></i> ${propiedades_venta[i].costo}</p>
  
  <p class=${
    propiedades_venta[i].smoke == true ? 'text-success' : 'text-danger'
  }><i ${
    propiedades_venta[i].smoke == true
      ? 'class="fas fa-smoking"'
      : 'class="fas fa-smoking-ban"'
  }></i> ${
    propiedades_venta[i].smoke == true
      ? 'Permitido fumar'
      : 'No se permite fumar'
  }</p>
  
  
  <p class=${
    propiedades_venta[i].pets == true ? 'text-success' : 'text-danger'
  }><i ${
    propiedades_venta[i].pets == true
      ? 'class="fas fa-paw"'
      : 'class="fa-solid fa-ban"'
  }></i> ${
    propiedades_venta[i].pets == true
      ? 'Mascotas permitidas'
      : 'No se permiten mascotas'
  }</p>
  </div>`;
  const div = document.createElement('div');
  div.innerHTML = info;
  div.id = 'card';
  document.getElementById('seccion').appendChild(div);
}
