const buttonRating = document.querySelectorAll('.buttonRating');

buttonRating.forEach((button) => {
    button.addEventListener('click', (evento) => {
        const classes = evento.target.dataset.value

        if (classes >= 0) {
            const buttonSubmit = document.getElementById('buttonEnviarRating');
            buttonSubmit.addEventListener('click', enviar);

            function enviar(e) {
                buttonSubmit.setAttribute("data-bs-target", "#ratingThankYou");
                buttonSubmit.setAttribute("data-bs-toggle", "modal");
                buttonSubmit.click();
            }

            const resultado = document.getElementById('ratingResultado');

            resultado.innerHTML = `Você selecionou  ${classes} de 10`
        }
    });
})