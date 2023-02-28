import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-food-add',
  templateUrl: './food-add.component.html',
  styleUrls: ['./food-add.component.scss']
})
export class FoodAddComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public listAddItem(valeu: string){
    console.log(valeu);
  }

}
