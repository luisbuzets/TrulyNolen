document.addEventListener('DOMContentLoaded', function () {
  const formularioCrear = document.getElementById('formulario-crear');

  formularioCrear.addEventListener('submit', async function (event) {
    event.preventDefault();

    const formData = new FormData(this);
    const nuevoCliente = {
      id: formData.get('id'),
      cliente: formData.get('cliente'),
      identificador: formData.get('identificador'),
      rtn: formData.get('rtn'),
      direccion: formData.get('direccion'),
      contacto: formData.get('contacto'),
      telefono: formData.get('telefono')

    };

    const response = await fetch('/Clientes-Sucursales', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(nuevoCliente)
    });

    if (response.ok) {
      alert('Usuario y dirección creados exitosamente');
    } else {
      alert('Error al crear usuario y dirección');
    }
  });
});
