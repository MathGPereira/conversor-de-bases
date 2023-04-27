export default class Conversor {

    decimalParaOutraBase(numero, base, numeroConvertido=[]) {
        const resto = numero % base;
        const quociente = Math.trunc(numero / base);

        numeroConvertido.push(resto);
        console.log(numeroConvertido)

        if(quociente <= 1) {
            numeroConvertido.push(quociente);
            console.log(numeroConvertido.reverse().join(""));
            return;
        }
        
        this.decimalParaOutraBase(quociente, base);
    }
}