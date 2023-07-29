const buttonRating = document.querySelectorAll('.buttonRating');

buttonRating.forEach((button) => {
    button.addEventListener('click', (evento) => {
        const classes = evento.target.dataset.value

        if (classes >= 0) {
            const buttonSubmit = document.getElementById('buttonEnviarRating');
            buttonSubmit.addEventListener('click', enviar);

            function enviar(e) {
                const botaoEnviar = document.getElementById('buttonEnviarRating');
                botaoEnviar.setAttribute("data-bs-target", "#ratingThankYou");
                botaoEnviar.setAttribute("data-bs-toggle", "modal");
                botaoEnviar.click();
            }

            const resultado = document.getElementById('ratingResultado');

            resultado.innerHTML = `${'Você selecionou ' + classes + ' de 10'}`

        }
    });
})