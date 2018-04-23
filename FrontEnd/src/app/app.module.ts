import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ComponentsComponent } from './components/components.component';
import { ManageSubjectComponent } from './components/manage-subject/manage-subject.component';


@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
    ManageSubjectComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
