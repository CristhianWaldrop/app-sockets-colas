let socket = io();

socket.on('connect', () => {

    console.log('Conectado al servidor');

});

socket.on('disconnect', () => {

    console.log('Perdimos conexion con el servidor');

});

socket.emit('enviarMensaje', {
    usuario: 'Cristhian Molina',
    apodo: 'La lacra',
    mensaje: 'Hola Mundo'
}, (resp) => {

    console.log('Respuesta server: ', resp);

});

socket.on('enviarMensaje', (mensaje) => {

    console.log(mensaje);

});