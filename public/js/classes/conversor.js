export default class Conversor {

    async decimalParaOutraBase(numero, base) {
        const resto = numero % base;
        const quociente = Math.trunc(numero / base);

        Conversor.validaResto(resto, numeroConvertido)

        if(Conversor.validaQuociente(quociente, numeroConvertido)) {
            return;
        }

        await this.decimalParaOutraBase(quociente, base);
    }

    async outraBaseParaDecimal(numero, baseOriginal, baseFinal) {
        let resultado = 0;
        const listaDeAlgarismos = numero.split("").reverse();

        listaDeAlgarismos.forEach((numero, indice) => {
            resultado += Number(numero) * (baseOriginal ** indice);
        });

        await this.decimalParaOutraBase(resultado, baseFinal);
    }

    static async conectaComAPI() {
        const url = "http://localhost:3000/restoParaHexadecimal";
        const requisicao = await fetch(url);

        return requisicao.json();
    }

    static async validaResto(resto, numeroConvertido) {
        if(resto >= 10) {
            const getBancoDeDados = await this.conectaComAPI();
            const restoString = `${resto}`;

            numeroConvertido.push(getBancoDeDados[0][restoString]);            
        }else {
            numeroConvertido.push(resto);
        }
    }

    static validaQuociente(quociente, numeroConvertido) {
        if(quociente <= 1) {
            numeroConvertido.push(quociente);
            numeroConvertido.reverse()[0] === 0 ? numeroConvertido.reverse().pop() : numeroConvertido.reverse();

            this.imprimeResposta(numeroConvertido.reverse().join(""));
            numeroConvertido = [];

            return true;
        }
    }

    static imprimeResposta(numeroConvertido) {
        $("[data-resposta]").val(numeroConvertido);
    }
}

let numeroConvertido = [];
