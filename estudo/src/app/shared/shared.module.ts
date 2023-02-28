import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Components
import { NewComponentComponent } from './new-component/new-component.component';
import { FoodListComponent } from './food-list/food-list.component';
import { FoodAddComponent } from './food-add/food-add.component';


@NgModule({
  declarations: [
    NewComponentComponent,
    FoodListComponent,
    FoodAddComponent
  ],
  exports: [
    NewComponentComponent,
    FoodListComponent,
    FoodAddComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
