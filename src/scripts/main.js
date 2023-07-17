document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('formSorteador').addEventListener('submit', function(evento) {
        evento.preventDefault();
        let numeroMaximo = document.getElementById('numeroMaximo').value;
        numeroMaximo = parseInt(numeroMaximo);

        let numeroAleatorio = Math.random() * numeroMaximo;
        numeroAleatorio = Math.floor(numeroAleatorio + 1);

        document.getElementById('resultadoValor').innerText = numeroAleatorio;
        document.querySelector('.resultado').style.display = 'block';
    })
})