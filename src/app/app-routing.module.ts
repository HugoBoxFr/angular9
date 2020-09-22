import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCvComponent } from './components/add-cv/add-cv.component';
import { ColorComponent } from './components/color/color.component';
import { CvComponent } from './components/cv/cv.component';
import { DeleteCvComponent } from './components/delete-cv/delete-cv.component';
import { DetailComponent } from './components/detail/detail.component';
import { ErrorComponent } from './components/error/error.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  // { path:'cv/:id', component: DetailComponent },
  // { path:'cv', redirectTo: '/', pathMatch: 'full' },

  { path:'cv', children: [
    { path:'', component: CvComponent },
    { path:'delete/:id', component: DeleteCvComponent },
    { path:'add', component: AddCvComponent },
    { path:':id', component: DetailComponent },
  ] },
  { path:'', component: CvComponent },
  { path: 'color/:default', component: ColorComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
