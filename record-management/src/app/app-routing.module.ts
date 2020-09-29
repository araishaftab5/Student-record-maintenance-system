import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseinsertComponent } from './courseinsert/courseinsert.component';
import { GradeinsertComponent } from './gradeinsert/gradeinsert.component';
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
    path:'addcourse',
    component: CourseinsertComponent
  },
  {
    path:'addgrade',
    component: GradeinsertComponent
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
