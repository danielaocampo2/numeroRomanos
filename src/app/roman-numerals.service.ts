import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RomanNumeralsService {

  constructor() { }
  romano(num: any): String {
    if (num <= 0 || num > 1000) {
      return 'El número debe estar entre 1 y 1000';
    }
    if (num === 1000) {
      return 'M';
    }
    let letras = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
    let valores = [1, 5, 10, 50, 100, 500, 1000];
    let respuesta = '';
    let numeroDescompuesto: any[] = [];
    let numeroDigitos = Math.log(num) * Math.LOG10E + 1 | 0;
    let aux = num;
    for (let i = 0; i < numeroDigitos; i++) {
      numeroDescompuesto.unshift((aux % 10) * (Math.pow(10, i)));
      aux = Math.floor(aux / 10);
    }
    numeroDescompuesto.forEach(numero => {
      let respuestaAux = '';
      let numeroAux = numero;
      for (let i = 5; i >= 0; i--) {
        if (numeroAux >= valores[i]) {
          if ((numeroAux === valores[i]) && (respuestaAux.length <= 1)) {
            if (respuestaAux.length === 1 && numero > valores[letras.indexOf(respuestaAux)]) {
              respuestaAux = respuestaAux.concat(letras[i]);
            } else {
              respuestaAux = letras[i].concat(respuestaAux);
            }
            i = 0;
          } else if ((numeroAux === (valores[i + 1] - valores[i])) || (numeroAux === (valores[i + 1] - valores[i - 1]))) {
            respuestaAux = respuestaAux.concat(letras[i + 1]);
            numeroAux = valores[i + 1] - numeroAux;
            i++;
          } else {
            numeroAux = numeroAux - valores[i];
            respuestaAux = respuestaAux.concat(letras[i]);
            if (numeroAux >= valores[i]) {
              i++;
            }
          }
        }
      }
      respuesta = respuesta.concat(respuestaAux);
    });

    return respuesta;
  }
}
