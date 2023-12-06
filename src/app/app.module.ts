import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextFiledComponent } from './compnents/text-filed/text-filed.component';
import { LoginFormComponent } from './compnents/login-form/login-form.component';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from './compnents/button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    TextFiledComponent,
    LoginFormComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
