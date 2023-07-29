const formulario = document.getElementById('form');

formulario.addEventListener('submit', funcionou);

function funcionou (e) {
    e.preventDefault();
    const botaoFormEnviar = document.getElementById('buttonEnviarForm');
    botaoFormEnviar.setAttribute("data-bs-target", "#ratingModal");
    botaoFormEnviar.setAttribute("data-bs-toggle", "modal");
    botaoFormEnviar.click();
}
