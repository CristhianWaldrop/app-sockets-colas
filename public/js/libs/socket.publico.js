// Comando para establecer la conexion en el frontend
let socket = io();

let lblTickets = [
    document.getElementById("lblTicket1"),
    document.getElementById("lblTicket2"),
    document.getElementById("lblTicket3"),
    document.getElementById("lblTicket4")
]

let lblEscritorios = [
    document.getElementById("lblEscritorio1"),
    document.getElementById("lblEscritorio2"),
    document.getElementById("lblEscritorio3"),
    document.getElementById("lblEscritorio4")
]

socket.on('estadoActual', (data) => {
    actualizaHTML(data.ultimos4);
});

socket.on('ultimos4', (data) => {
    let audio = new Audio('audio/new-ticket.mp3');
    audio.play();
    actualizaHTML(data.ultimos4);
});

function actualizaHTML(ultimos4) {

    for (let i = 0; i <= ultimos4.length - 1; i++) {

        lblTickets[i].innerHTML = 'Ticket ' + ultimos4[i].numero;
        lblEscritorios[i].innerHTML = 'Escritorio ' + ultimos4[i].escritorio;
    }
}