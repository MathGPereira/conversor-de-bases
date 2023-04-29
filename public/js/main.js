import Conversor from "./classes/conversor.js";

const conversor = new Conversor();
const formulario = $("[data-formulario]");
const inputNumero = $("[data-numero]");

formulario.on("submit", function(evento) {
    evento.preventDefault();

    const numeroParaConverter = inputNumero.val();

    conversor.decimalParaOutraBase(numeroParaConverter, 2);
});
