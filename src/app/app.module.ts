import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextFiledComponent } from './compnents/text-filed/text-filed.component';
import { LoginFormComponent } from './compnents/login-form/login-form.component';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from './compnents/button/button.component';
import { PatientListComponent } from './compnents/patients/patient-list/patient-list.component';
import { AddNewPatientComponent } from './compnents/patients/add-new-patient/add-new-patient.component';
import { PatientsComponent } from './compnents/patients/patients/patients.component';
import { PatientItemComponent } from './compnents/patients/patient-item/patient-item.component';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  { path: 'login', component: LoginFormComponent },
  //{ path: 'patients', component: PatientsComponent },
  { path: 'patients/:id:', component: PatientsComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    TextFiledComponent,
    LoginFormComponent,
    ButtonComponent,
    PatientListComponent,
    PatientItemComponent,
    AddNewPatientComponent,
    PatientItemComponent,
    PatientsComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
