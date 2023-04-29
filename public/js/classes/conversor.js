export default class Conversor {

    decimalParaOutraBase(numero, base) {
        const resto = numero % base;
        const quociente = Math.trunc(numero / base);

        numeroConvertido.push(resto);

        if(quociente <= 1) {
            numeroConvertido.push(quociente);
            numeroConvertido.reverse()[0] === 0 ? numeroConvertido.reverse().pop() : numeroConvertido.reverse();

            Conversor.imprimeResposta(numeroConvertido.reverse().join(""));
            numeroConvertido = [];

            return;
        }
        
        this.decimalParaOutraBase(quociente, base);
    }

    outraBaseParaDecimal(numero, base) {
    
    }

    static imprimeResposta(numeroConvertido) {
        $("[data-resposta]").val(numeroConvertido);
    }
}

let numeroConvertido = [];