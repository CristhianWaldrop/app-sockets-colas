// Comando para establecer la conexion en el frontend
let socket = io();
let label = document.getElementById("small");

//title

let searchParams = new URLSearchParams(window.location.search);

if (!searchParams.has('escritorio')) {
    window.location = 'index.html';
    throw new Error('El escritorio es necesario');
}

let escritorio = searchParams.get('escritorio');
console.log(escritorio);

document.getElementById("title").innerHTML = 'Escritorio ' + escritorio;

$('button').on('click', () => {

    socket.emit('atenderTicket', { escritorio: escritorio }, (resp) => {

        if (resp.err) {
            return console.log(resp);
        }

        if (resp === 'No hay tickets por atender') {
            return label.innerHTML = resp;
        }

        label.innerHTML = 'Ticket ' + resp.numero;

    });
});