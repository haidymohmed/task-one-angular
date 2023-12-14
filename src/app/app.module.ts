import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextFiledComponent } from './compnents/text-filed/text-filed.component';
import { LoginFormComponent } from './compnents/login-form/login-form.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ButtonComponent } from './compnents/button/button.component';
import { PatientListComponent } from './compnents/patients/patient-list/patient-list.component';
import { AddNewPatientComponent } from './compnents/patients/add-new-patient/add-new-patient.component';
import { PatientsComponent } from './compnents/patients/patients/patients.component';
import { RouterModule, Routes } from '@angular/router';
import { PatientsRepositoryImp } from './repositories/patient.repository';
import { LoginRepositoryImp } from './repositories/login.repository';
import { GenderRepositoryImp } from './repositories/genger.repository';
import { EditPatientComponent } from './compnents/patients/edit-patient/edit-patient.component';
const routes: Routes = [
  { path: 'login', component: LoginFormComponent },
  { path: 'patients', component: PatientsComponent },
  {path : "addPatient" , component : AddNewPatientComponent},
  {path : "editPatient/:id" , component : EditPatientComponent},
];
@NgModule({
  declarations: [
    AppComponent,
    TextFiledComponent,
    LoginFormComponent,
    ButtonComponent,
    PatientListComponent,
    AddNewPatientComponent,
    PatientsComponent,
    EditPatientComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    PatientsRepositoryImp,
    LoginRepositoryImp,
    GenderRepositoryImp,
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
