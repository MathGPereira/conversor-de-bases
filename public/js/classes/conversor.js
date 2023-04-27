export default class Conversor {

    decimalParaOutraBase(numero, base, numeroConvertido=[]) {
        const quociente = Math.trunc(numero / base);
        const resto = numero % base;

        numeroConvertido.push(resto);

        if(quociente <= 1) {
            numeroConvertido.push(quociente);
            
            return numeroConvertido.reverse().join("");
        }
        
        this.decimalParaOutraBase(quociente, base);
    }
}