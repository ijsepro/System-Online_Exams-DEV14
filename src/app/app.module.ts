import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DepartmentloginComponent } from './components/departmentlogin/departmentlogin.component';
import { DepartmentregistrationComponent } from './components/departmentregistration/departmentregistration.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { DepLoginComponent } from './components/dep-login/dep-login.component';
import { DepRegistrationComponent } from './components/dep-registration/dep-registration.component';



const appRoutes: Routes = [
  { path: 'departmentlogin', component: DepartmentloginComponent },
  { path: 'departmentregistration', component: DepartmentregistrationComponent },
  { path: 'depLogin', component: DepLoginComponent },
  { path: 'depRegistration', component: DepRegistrationComponent }

];


@NgModule({
  declarations: [
    AppComponent,
    DepartmentloginComponent,
    DepartmentregistrationComponent,
    DirectivesComponent,
    DepLoginComponent,
    DepRegistrationComponent
  ],
  imports: [

    RouterModule.forRoot(appRoutes),

    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
