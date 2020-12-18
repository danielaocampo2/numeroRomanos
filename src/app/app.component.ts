import { Component } from '@angular/core';
import { RomanNumeralsService } from 'src/app/roman-numerals.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RomanNumerals';
  numeroRomano: String = '';

  constructor(private romanNumeralsService: RomanNumeralsService) { }

  convertir(numero){
    this.numeroRomano = this.romanNumeralsService.romano(parseInt(numero, 10));
  }

}
