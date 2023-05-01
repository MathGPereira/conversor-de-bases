export function verificaSelectAlterado(that) {
    return $(that).attr("data-base") === "original";
}

export function modificaEstadoDoInput(that, modo) {
    const agrupamento = $(`[data-agrupamento-modificador='${$(that).attr("data-base")}']`);
    const input = $(`[data-input-modificador='${$(that).attr("data-base")}']`);
    
    if(modo) {
        agrupamento.addClass("agrupamento-grid");
        input.removeClass("inativo");
    }else {
        agrupamento.removeClass("agrupamento-grid");
        input.addClass("inativo");
    }
}

export function mudaPaletaDeCor(container) {
    container.toggleClass(`${container.attr("data-container")}-escuro`);
}

export function alteraModoDoMenuLateral() {
    const menuLateral = $("[data-menu-lateral]");

    menuLateral.toggleClass("ativo");
}
