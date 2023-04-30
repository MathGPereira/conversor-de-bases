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

    outraBaseParaDecimal(numero, baseOriginal, baseFinal) {
        let resultado = 0;
        const listaDeAlgarismos = numero.split("").reverse();

        listaDeAlgarismos.forEach((numero, indice) => {
            resultado += Number(numero) * (baseOriginal ** indice);
        });

        this.decimalParaOutraBase(resultado, baseFinal);
    }

    static imprimeResposta(numeroConvertido) {
        $("[data-resposta]").val(numeroConvertido);
    }
}

let numeroConvertido = [];
