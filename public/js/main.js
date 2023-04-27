import Conversor from "./classes/conversor.js";

const conversor = new Conversor();
const inputNumero = $("[data-numero]");

inputNumero.blur(function() {
    const numeroParaConverter = $(this).val();

    conversor.decimalParaOutraBase(numeroParaConverter, 2);
});
