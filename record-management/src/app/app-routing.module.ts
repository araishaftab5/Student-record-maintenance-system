import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InsertComponent } from './insert/insert.component';
import { ShowComponent } from './show/show.component';
import { UpdateComponent } from './update/update.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {
    path:'insert',
    component: InsertComponent
  },
  {
    path:'update/:id',
    component: UpdateComponent
  },
  {
    path:'',
    component: ViewComponent
  },
  {
    path:'show/:id',
    component: ShowComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
