import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputComponent } from './input/input.component';
import { AutocompleteComponent } from './component/autocomplete/autocomplete.component';
import { HomeComponent } from './component/home/home.component';
import { CardComponent } from './component/card/card.component';
import { SliderComponent } from './component/slider/slider.component';
import { TableComponent } from './component/table/table.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "input",
    component: InputComponent
  },
  {
    path: "autocomplete",
    component: AutocompleteComponent
  },
  {
    path: "card",
    component: CardComponent
  },
  {
    path: "slider",
    component: SliderComponent
  },
  {
    path: "table",
    component: TableComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
