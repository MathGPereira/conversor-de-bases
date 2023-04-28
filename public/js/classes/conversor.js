export default class Conversor {

    decimalParaOutraBase(numero, base) {
        const resto = numero % base;
        const quociente = Math.trunc(numero / base);

        numeroConvertido.push(resto);

        if(quociente <= 1) {
            numeroConvertido.push(quociente);
            Conversor.imprimeResposta(numeroConvertido.reverse().join(""));

            return;
        }
        
        this.decimalParaOutraBase(quociente, base);
    }

    static imprimeResposta(numeroConvertido) {
        $("[data-resposta]").val(numeroConvertido);
    }
}

const numeroConvertido = [];