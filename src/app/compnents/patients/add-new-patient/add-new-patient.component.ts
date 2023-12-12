import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { GenderModel } from 'src/app/models/gender.model';
import { PatientModel } from 'src/app/models/patient.model';
import { GenderRepositoryImp } from 'src/app/repositories/genger.repository';
import { PatientsRepositoryImp } from 'src/app/repositories/patient.repository';

@Component({
  selector: 'app-add-new-patient',
  templateUrl: './add-new-patient.component.html',
  styleUrls: ['./add-new-patient.component.css'],
})
export class AddNewPatientComponent implements OnInit {

  patient : PatientModel = new PatientModel('',0,'',1);
  genders : GenderModel[] = [];
  constructor(private genderRepository : GenderRepositoryImp , private patientRepository : PatientsRepositoryImp , private router : Router) { 
    this.genders = genderRepository.getGenders();
  }

  addPatient(form : NgForm){
    this.patient.name = form.value.name ;
    this.patient.age = this.calculateDiff(form.value.birthday);
    this.patient.birthday = form.value.birthday ;
    console.log(this.patient);
    this.patientRepository.addPatient(this.patient);
    this.router.navigate(['../patients'])
  }
  onDateChange(form : NgForm){
    this.patient.age = this.calculateDiff(form.value.birthday);
    form.controls['age'].setValue(this.calculateDiff(form.value.birthday));
  }

  calculateDiff(sentDate: string) {
    var date1:any = new Date(sentDate);
    var date2:any = new Date();
    var diffDays:any = Math.floor((date2 - date1) / (1000 * 60 * 60 * 24));
    return Math.ceil(diffDays / 365);
  }
  ngOnInit(): void {
  }

}
