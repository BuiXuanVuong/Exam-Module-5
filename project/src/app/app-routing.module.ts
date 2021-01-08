import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BookListComponent} from "./book-list/book-list.component";
import {CreateProjectComponent} from "./create-project/create-project.component";
import {UpdateProjectComponent} from "./update-project/update-project.component";
import {DetailProjectComponent} from "./detail-project/detail-project.component";

const routes: Routes = [
  {path: 'books', component: BookListComponent},
  {path: '', redirectTo: 'books', pathMatch: 'full'},
  {path: 'create-project', component:CreateProjectComponent},
  {path: 'update-project/:id', component:UpdateProjectComponent},
  {path: 'detail-project/:id', component:DetailProjectComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
