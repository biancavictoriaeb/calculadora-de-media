const formulario = document.getElementById("formulario");

const resultado = document.getElementById("resultado");

formulario.addEventListener("submit", function(evento) {

    evento.preventDefault();

    const nota1 = Number(document.getElementById("nota1").value);

    const nota2 = Number(document.getElementById("nota2").value);

    const nota3 = Number(document.getElementById("nota3").value);

    const notas = [nota1, nota2, nota3];

    if (notas.some(nota => nota < 0 || nota > 10)) {

        resultado.textContent = "Digite notas entre 0 e 10.";

        resultado.style.color = "red";

        return;
    }

    const media = (nota1 + nota2 + nota3) / 3;

    if (media >= 7) {

        resultado.textContent =
        `Média: ${media.toFixed(1)} — Aprovado(a)!`;

        resultado.style.color = "green";

    } else {

        resultado.textContent =
        `Média: ${media.toFixed(1)} — Recuperação!`;

        resultado.style.color = "orange";

    }

});
