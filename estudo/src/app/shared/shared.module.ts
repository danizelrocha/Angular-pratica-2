import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewComponentComponent } from './new-component/new-component.component';
import { FoodListComponent } from './food-list/food-list.component';


@NgModule({
  declarations: [
    NewComponentComponent,
    FoodListComponent
  ],
  exports: [
    NewComponentComponent,
    FoodListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
