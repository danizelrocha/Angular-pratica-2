import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  public listComidas: Array<{comida: string, preco: any}> = [
    { comida:"X Bacon",preco:"R$28,00"},
    { comida:"X Salada", preco:"R$18,00"},
    { comida:"X CalaFrango", preco:"R$35,00"},
    { comida:"X Coxinha", preco:"R$8,00"}
  ];

  constructor() {}

  ngOnInit(): void {
 }

 public submitForm(form: NgForm){
  if (form.valid){
    console.log(form.value)
  }
 }
}
