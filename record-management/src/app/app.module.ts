import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewComponent } from './view/view.component';
import { InsertComponent } from './insert/insert.component';
import { UpdateComponent } from './update/update.component';
import {UsersService} from './users.service';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShowComponent } from './show/show.component';
import { CourseinsertComponent } from './courseinsert/courseinsert.component';
import { GradeinsertComponent } from './gradeinsert/gradeinsert.component';
@NgModule({
  declarations: [
    AppComponent,
    ViewComponent,
    InsertComponent,
    UpdateComponent,
    ShowComponent,
    CourseinsertComponent,
    GradeinsertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
