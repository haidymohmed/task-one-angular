import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextFiledComponent } from './compnents/text-filed/text-filed.component';
import { LoginFormComponent } from './compnents/login-form/login-form.component';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from './compnents/button/button.component';
import { PopupModule } from '@progress/kendo-angular-popup';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { PatientListComponent } from './compnents/patients/patient-list/patient-list.component';
import { AddNewPatientComponent } from './compnents/patients/add-new-patient/add-new-patient.component';
import { PatientsComponent } from './compnents/patients/patients/patients.component';
import { PatientItemComponent } from './compnents/patients/patient-item/patient-item.component';

@NgModule({
  declarations: [
    AppComponent,
    TextFiledComponent,
    LoginFormComponent,
    ButtonComponent,
    PatientListComponent,
    AddNewPatientComponent,
    PatientItemComponent,
    PatientsComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    ButtonsModule,
    PopupModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
