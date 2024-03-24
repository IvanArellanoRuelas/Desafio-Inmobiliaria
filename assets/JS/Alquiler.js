const propiedades_alquiler = [
  {
    nombre: 'Apartamento en el centro de la ciudad',
    src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
    descripcion:
      'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.',
    ubicacion: '123 Main Street, Anytown, CA 91234',
    habitaciones: 2,
    baños: 2,
    costo: 2000,
    smoke: false,
    pets: true,
  },
  {
    nombre: 'Apartamento luminoso con vista al mar',
    src: 'https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    descripcion:
      'Este hermoso apartamento ofrece una vista impresionante al mar',
    ubicacion: '456 Ocean Avenue, Seaside Town, CA 56789',
    habitaciones: 3,
    baños: 3,
    costo: 2500,
    smoke: true,
    pets: true,
  },
  {
    nombre: 'Condominio moderno en zona residencial',
    src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
    descripcion:
      'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
    ubicacion: '123 Main Street, Anytown, CA 91234',
    habitaciones: 2,
    baños: 2,
    costo: 2200,
    smoke: false,
    pets: false,
  },
  {
    nombre: 'Departamento al interior de la ciudad',
    src: 'https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    descripcion: 'Hermoso departamento de lujo en los interiores de la ciudad',
    ubicacion: '123 Main Street, Anytown, CA 91234',
    habitaciones: 2,
    baños: 5,
    costo: 5000,
    smoke: true,
    pets: false,
  },
];

for (i in propiedades_alquiler) {
  let info = '';
  info += `
<div id="card">
<img src=${
    propiedades_alquiler[i].src
  } class="card-img-top" alt="Imagen del departamento"/>
<h5 class="card-title">${propiedades_alquiler[i].nombre}</h5>
<p class="card-text">${propiedades_alquiler[i].descripcion}</p>
<p><i class="fas fa-map-marker-alt"></i>${propiedades_alquiler[i].ubicacion}</p>
<p><i class="fas fa-bed"></i> ${
    propiedades_alquiler[i].habitaciones
  } Habitaciones |<i class='fas fa-bath'></i> ${
    propiedades_alquiler[i].baños
  } Baños</p>
<p><i class="fas fa-dollar-sign"></i> ${propiedades_alquiler[i].costo}</p>

<p class=${
    propiedades_alquiler[i].smoke == true ? 'text-success' : 'text-danger'
  }><i ${
    propiedades_alquiler[i].smoke == true
      ? 'class="fas fa-smoking"'
      : 'class="fas fa-smoking-ban"'
  }></i> ${
    propiedades_alquiler[i].smoke == true
      ? 'Permitido fumar'
      : 'No se permite fumar'
  }</p>


<p class=${
    propiedades_alquiler[i].pets == true ? 'text-success' : 'text-danger'
  }><i ${
    propiedades_alquiler[i].pets == true
      ? 'class="fas fa-paw"'
      : 'class="fa-solid fa-ban"'
  }></i> ${
    propiedades_alquiler[i].pets == true
      ? 'Mascotas permitidas'
      : 'No se permiten mascotas'
  }</p>
</div>`;
  const div = document.createElement('div');
  div.innerHTML = info;
  div.id = 'card';
  document.getElementById('seccion').appendChild(div);
}
