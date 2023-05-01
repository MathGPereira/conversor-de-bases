import { verificaSelectAlterado, modificaEstadoDoInput } from "./auxiliar/funcoesAuxiliar.js";
import Conversor from "./classes/conversor.js";

const conversor = new Conversor();
const formulario = $("[data-formulario]");
const inputNumero = $("[data-numero]");
const parametros = {};

$("[data-base]").each(function() {
    $(this).on("change", function() {
        $(this).val() === "-1" ? modificaEstadoDoInput(this, true) : modificaEstadoDoInput(this, false);
    });
});

formulario.on("submit", function(evento) {
    evento.preventDefault();
    const numeroParaConverter = inputNumero.val().toUpperCase();

    $("[data-base]").each(function() {
        verificaSelectAlterado(this) ? parametros.original = $(this).val() : parametros.base = $(this).val();

        if($(this).val() === "-1" && verificaSelectAlterado(this)) {
            parametros.original = $("[data-base-alterada='original']").val();
        }else if($(this).val() === "-1" && !verificaSelectAlterado(this)) {
            parametros.base = $("[data-base-alterada='resposta']").val();
        }
    });

    parametros.original === "10" ? conversor.decimalParaOutraBase(numeroParaConverter, parametros.base) : conversor.outraBaseParaDecimal(numeroParaConverter, parametros.original, parametros.base);
    inputNumero.focus();
});
