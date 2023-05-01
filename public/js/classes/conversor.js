export default class Conversor {

    async decimalParaOutraBase(numero, base) {
        const resto = numero % base;
        const quociente = Math.trunc(numero / base);
        const bancoDeDados = await Conversor.conectaComAPI("http://localhost:3000/restoParaBaseMaiorQueDecimal");

        resto >= 10 ? listaDeRestos.push(bancoDeDados[0][resto]) : listaDeRestos.push(resto);
       
        if(quociente === 0) {
            Conversor.imprimeResposta(listaDeRestos.reverse().join(""));
            listaDeRestos = [];
            return;
        }

        this.decimalParaOutraBase(quociente, base);
    }

    async outraBaseParaDecimal(numero, baseOriginal, baseFinal) {
        let numeroBaseDez = 0;
        const listaAlgarismosConvertidos = [];
        const listaAlgarismos = numero.split("");
        const bancoDeDados = await Conversor.conectaComAPI("http://localhost:3000/BaseMaiorQueDecimalParaResto");

        listaAlgarismos.map(algarismo => {
            Object.keys(bancoDeDados[0]).find(item => algarismo === item) ? listaAlgarismosConvertidos.push(bancoDeDados[0][algarismo]) : listaAlgarismosConvertidos.push(algarismo);
        });

        listaAlgarismosConvertidos.reverse().forEach((algarismoConvertido, indice) => {
            numeroBaseDez += algarismoConvertido * (baseOriginal ** indice);
        });

        this.decimalParaOutraBase(numeroBaseDez, baseFinal);
    }

    static async conectaComAPI(url) {
        const requisicao = await fetch(url);

        return requisicao.json();
    }

    static imprimeResposta(numeroConvertido) {
        $("[data-resposta]").val(numeroConvertido);
    }
}

let listaDeRestos = [];
