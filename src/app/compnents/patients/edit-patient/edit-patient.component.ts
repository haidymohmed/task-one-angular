import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GenderModel } from 'src/app/models/gender.model';
import { PatientModel } from 'src/app/models/patient.model';
import { GenderRepositoryImp } from 'src/app/repositories/genger.repository';
import { PatientsRepositoryImp } from 'src/app/repositories/patient.repository';

@Component({
  selector: 'app-edit-patient',
  templateUrl: './edit-patient.component.html',
  styleUrls: ['./edit-patient.component.css']
})
export class EditPatientComponent implements OnInit {

  index : number = 0;
  patient : PatientModel = new PatientModel(1,'',0,'',1);
  genders : GenderModel[] = [];
  constructor(private genderRepository : GenderRepositoryImp , 
    private patientRepository : PatientsRepositoryImp ,
    private datePipe : DatePipe,
    private router : Router ,private activatedRoute : ActivatedRoute) { 
      this.index = this.activatedRoute.snapshot.params['id'] ;
      console.log(this.index);
      patientRepository.getPatientById(this.index).subscribe(
        res=>{
          let body = JSON.parse(JSON.stringify(res))['data'];
          this.patient = new PatientModel(
            body['id'],
            body['name'],
            body['age'],
            this.datePipe.transform(new Date(body['birthDate']), 'yyyy-MM-dd') ?? '',
            body['gender'],
          )
        }
      );
      
      console.log(this.patient);
      
      this.genders = genderRepository.getGenders();
  }

  editPatient(form : NgForm){
    this.patient.name = form.value.name ;
    this.patient.age = this.calculateDiff(form.value.birthday);
    this.patient.birthday = form.value.birthday ;
    console.log(this.patient);
    this.patient.birthday =  new Date(this.patient.birthday).toISOString();
     this.patientRepository.editPatient(this.patient , this.index).subscribe(
      res =>{
        alert("Patient added successfully");
        this.router.navigate(['../patients']);
      },
      err =>{
        alert(err);
      }
    );
    this.patientRepository.patientChanged.emit();
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
