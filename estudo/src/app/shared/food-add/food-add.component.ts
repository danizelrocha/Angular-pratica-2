import { Component, OnInit } from '@angular/core';

//Services
import { FoodListService } from 'src/app/service/food-list.service';

@Component({
  selector: 'app-food-add',
  templateUrl: './food-add.component.html',
  styleUrls: ['./food-add.component.scss']
})
export class FoodAddComponent implements OnInit {

  constructor(private foodListService: FoodListService) { }

  ngOnInit(): void {
  }
  public listAddItem(valeu: string){
    return this.foodListService.foodListAdd(valeu).subscribe(
      res => this.foodListService.foodListAlert(res),
      error => error
    );
  }
}
/*
({
  next: (res) => console.log(res),
  error: (err) => console.log(err),
}); */
