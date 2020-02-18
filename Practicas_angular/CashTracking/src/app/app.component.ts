import { Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  expenses = [];
  Total = null;

  addExpense(input: HTMLInputElement) {
    const value = input.value;
    if (value === '') {
    alert ('Ingrese valor valido');
    } else {
    this.Total = this.Total - Number(input.value);
    this.expenses.push(value);
    }
    this.clearInput(input);
  }

  addIncome(input: HTMLInputElement) {
    const value = input.value;
    if (value === '') {
    alert ('Ingrese valor valido');
    } else {
    this.Total = this.Total + Number(input.value);
    this.expenses.push(value);
      }
    this.clearInput(input);
    }


  clearInput(input: HTMLInputElement) {
    input.value = '';
  }



}
