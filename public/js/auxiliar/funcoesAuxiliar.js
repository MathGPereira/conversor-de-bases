export function verificaSelectAlterado(that) {
    return $(that).attr("data-base") === "original";
}

export function modificaEstadoDoInput(that) {
    const agrupamento = $(`[data-agrupamento-modificador='${$(that).attr("data-base")}']`);
    const input = $(`[data-input-modificador='${$(that).attr("data-base")}']`);

    agrupamento.toggleClass("agrupamento-grid");
    input.toggleClass("inativo");
}
