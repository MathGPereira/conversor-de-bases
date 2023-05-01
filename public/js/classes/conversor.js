export default class Conversor {

    async decimalParaOutraBase(numero, base) {
        
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

let numeroConvertido = [];
