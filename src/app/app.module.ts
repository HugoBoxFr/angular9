import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CvComponent } from './components/cv/cv.component';
import { ListeCvComponent } from './components/liste-cv/liste-cv.component';
import { ItemCvComponent } from './components/item-cv/item-cv.component';
import { DetailCvComponent } from './components/detail-cv/detail-cv.component';
import { FormsModule } from '@angular/forms';
import { StyleComponent } from './directive/style/style.component';
import { ClassComponent } from './directive/class/class.component';
import { HightlightDirective } from './directive/hightlight.directive';
import { RainbowDirective } from './directive/rainbow.directive';
import { DefaultImagePipe } from './components/default-image.pipe';
import { EmbaucheComponent } from './components/embauche/embauche.component';
import { HeaderComponent } from './header/header.component';
import { ColorComponent } from './components/color/color.component';
import { FilsComponent } from './fils/fils.component';
import { RouterSimulatorComponent } from './components/router-simulator/router-simulator.component';
import { DetailComponent } from './components/detail/detail.component';
import { AddCvComponent } from './components/add-cv/add-cv.component';
import { ErrorComponent } from './components/error/error.component';
import { LoginComponent } from './login/login.component';
import { ObservableComponent } from './components/observable/observable.component';
import { HttpComponent } from './components/http/http.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginInterceptorProvider } from './interceptors/login.interceptor';
import { LoginGuard } from './guards/login.guard';
import { LougoutGuard } from './guards/logout.guard';
import { UpdateCvComponent } from './components/update-cv/update-cv.component';

@NgModule({
  declarations: [
    AppComponent,
    CvComponent,
    ListeCvComponent,
    ItemCvComponent,
    DetailCvComponent,
    StyleComponent,
    ClassComponent,
    HightlightDirective,
    RainbowDirective,
    DefaultImagePipe,
    EmbaucheComponent,
    HeaderComponent,
    ColorComponent,
    FilsComponent,
    RouterSimulatorComponent,
    DetailComponent,
    AddCvComponent,
    ErrorComponent,
    LoginComponent,
    ObservableComponent,
    HttpComponent,
    UpdateCvComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    LoginInterceptorProvider,
    LoginGuard,
    LougoutGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
