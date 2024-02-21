import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ex06',
  standalone: true,
  imports: [FormsModule],
  template: `
    <h1>Exercice 6</h1>
    <h2>Fahrenheit/Celsius conversion</h2>
    Celcius:
    <input [(ngModel)]="celcius" (keyup)="converToFahrenheit()" />
    <br />
    Fahrenheit:
    <input [(ngModel)]="fahrenheit" (keyup)="convertToCelcius()" />
    <br />
    <button (click)="clear()">Reset</button>
  `,
})
export class Ex06Component {
  celcius: number = 0;
  fahrenheit: number = 0;

  clear() {
    this.celcius = 0;
    this.fahrenheit = 0;
  }

  convertToCelcius() {
    this.celcius = ((this.fahrenheit - 32) * 5) / 9;
  }

  converToFahrenheit() {
    this.fahrenheit = (this.celcius * 9) / 5 + 32;
  }
}
