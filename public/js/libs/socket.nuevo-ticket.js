// Comando para establecer la conexion en el frontend
let socket = io();

let label = document.getElementById("lblNuevoTicket")

socket.on('connect', () => {
    console.log('Conectado al servidor');
});

socket.on('disconnect', () => {
    console.log('Desconectado del servidor');
});

socket.on('estadoActual', (ticketActual) => {
    label.innerHTML = ticketActual.actual;
});

$('button').on('click', () => {

    socket.emit('siguienteTicket', null, (siguienteTicket) => {

        label.innerHTML = siguienteTicket;

    });
});