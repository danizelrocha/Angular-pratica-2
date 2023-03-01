import { FoodList } from './../../module/food-list';
import { Component, OnInit } from '@angular/core';

//Services
import { FoodListService } from 'src/app/service/food-list.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent implements OnInit{

  public foodList: Array<FoodList> = [];
  FoodList: any;

  constructor(private foodListService: FoodListService) { }

  ngOnInit(): void {
    this.foodListService.foodList().subscribe( {// OBCERVAR
      next: (res) => console.log(res),
      error: (err) => console.log(err),
    });

    this.foodListService.emitEvent.subscribe(
      res =>{
      alert(`Olha você add =>${res.nome}`);
      return this.foodList.push(res);
      }
    );
  }

  public foodListEdit(value: string, id: number) {
    this.foodListService.foodListEdit(value, id).subscribe(
      res => {
        return console.log(res)
      },
      error => error
    )
  }

  public foodListDelete(id:number) {
    return this.foodListService.foodListDelete(id).subscribe(
      res => {
        this.foodList = this.foodList.filter(
          item =>{
            return id !== item.id
          }
        )
      },
      error => error
    )
  }
}
/* ({
  next: (res) => console.log(res),
  error: (err) => console.log(err),
}); */
