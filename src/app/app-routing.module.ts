import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCvComponent } from './components/add-cv/add-cv.component';
import { ColorComponent } from './components/color/color.component';
import { CvComponent } from './components/cv/cv.component';
import { DetailComponent } from './components/detail/detail.component';
import { ErrorComponent } from './components/error/error.component';
import { UpdateCvComponent } from './components/update-cv/update-cv.component';
import { LoginGuard } from './guards/login.guard';
import { LougoutGuard } from './guards/logout.guard';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  // { path:'cv/:id', component: DetailComponent },
  // { path:'cv', redirectTo: '/', pathMatch: 'full' },

  { path:'cv', children: [
    { path:'', component: CvComponent },
    { path:'updateCv/:id', component: UpdateCvComponent },
    { path:'add', component: AddCvComponent, canActivate: [LoginGuard] },
    { path:':id', component: DetailComponent },
  ] },
  { path:'', component: CvComponent },
  { path: 'color/:default', component: ColorComponent },
  { path: 'login', component: LoginComponent, canActivate: [LougoutGuard ] },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
