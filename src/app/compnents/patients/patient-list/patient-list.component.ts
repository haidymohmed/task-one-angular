import { DatePipe } from '@angular/common';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { GenderModel } from 'src/app/models/gender.model';
import { PatientModel } from 'src/app/models/patient.model';
import { GenderRepositoryImp } from 'src/app/repositories/genger.repository';
import { PatientsRepositoryImp } from 'src/app/repositories/patient.repository';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {
  public patients: PatientModel[] = [];
  public genders: GenderModel[] = [];

  constructor(private patientsRepository : PatientsRepositoryImp , private datePipe : DatePipe ,private genderRepository : GenderRepositoryImp){ 
    patientsRepository.getAllPatients().subscribe(res=>{
      this.mapRes(res);
    }, err=>{
      alert("An error occured");
    });
    this.genders = genderRepository.getGenders();
  }
  
  mapGender(value : number){
    for(let gender of this.genders){
      if(value == gender.value){
        return gender.type ;
      }
    }
    return '';
  }

  deletePatient(index: number) {
    this.patientsRepository.deletePatient(index).subscribe(
      res =>{
        console.log(res);
        alert("Patient deleted successfully");
      },
      err =>{
        alert("An error occured");
      }
    );
    this.patientsRepository.patientChanged.emit();
  }

  ngOnInit(): void {
    this.patientsRepository.patientChanged.subscribe((changed) => {   
      this.patientsRepository.getAllPatients().subscribe(
        res =>{
          this.mapRes(res);
        },
        err =>{
          alert("An error occured");
        }
      );
    });
  }
  mapRes(res : any){
    this.patients = [];
    for(let item of res){
      this.patients.push(new PatientModel(item["id"],item['name'],item['age'],this.datePipe.transform(new Date(item['birthDate']), 'yyyy-MM-dd') ?? '',item['gender']));
    }
  }
}
