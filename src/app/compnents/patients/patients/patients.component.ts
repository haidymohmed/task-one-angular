import { Component, OnInit } from '@angular/core';
import { PatientModel } from 'src/app/models/patient.model';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {

  public patients: PatientModel[] = [
    new PatientModel('haisy' , 9 , '1993-05-15' , 'Male'),
    new PatientModel('haisy' , 9 , '1993-05-15' , 'Male'),
    new PatientModel('haisy' , 9 , '1993-05-15' , 'Male'),
  ];

  editPatient(patient: PatientModel) {
    // Logic for editing a patient goes here
  }

  deletePatient(patient: PatientModel) {
    const index = this.patients.indexOf(patient);
    if (index !== -1) {
      this.patients.splice(index, 1);
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
