import { Component, OnInit } from '@angular/core';
import { PatientModel } from 'src/app/models/patient.model';
import { PatientsRepositoryImp } from 'src/app/repositories/patient.repository';
import { GenderRepositoryImp } from 'src/app/repositories/genger.repository';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css'],
})


export class PatientsComponent implements OnInit {
  public patients: PatientModel[] = [];

  constructor(private patientsRepository : PatientsRepositoryImp , private genderRepositoryImp : GenderRepositoryImp){ 
    this.patients = patientsRepository.getAllPatients();
    this.patientsRepository.patientChanged.subscribe((changedPatients) => {
      this.patients = changedPatients;
    });
   }
  editPatient(patient: PatientModel) {
    // Logic for editing a patient goes here
  }

  deletePatient(patient: PatientModel) {
    const index = this.patients.indexOf(patient);
    if (index !== -1) {
      this.patients.splice(index, 1);
    }
  }

  ngOnInit(): void {
  }

}
