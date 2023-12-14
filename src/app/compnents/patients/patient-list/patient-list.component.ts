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
export class PatientListComponent implements OnInit  , OnChanges{
  public patients: PatientModel[] = [];
  public genders: GenderModel[] = [];

  constructor(private patientsRepository : PatientsRepositoryImp , private genderRepository : GenderRepositoryImp){ 
    console.log("Changed constructor");
    patientsRepository.getAllPatients().subscribe(res=>{
      for(let item of res){
        this.patients.push(new PatientModel(item['name'],item['age'],item['birthDate'],item['gender']));
      }
    }, err=>{

    });
    this.genders = genderRepository.getGenders();
  }
  ngOnChanges(changes: SimpleChanges): void {this.patientsRepository.patientChanged.subscribe((changed) => {
      console.log("ngOnChanges");
      
      this.patients = changed;
    });
  }
  
  mapGender(value : number){
    for(let gender of this.genders){
      if(value == gender.value){
        return gender.type ;
      }
    }
    return '';
  }
  editPatient(patient: PatientModel) {
    // Logic for editing a patient goes here
  }

  deletePatient(index: number) {
    this.patientsRepository.deletePatient(index);
    this.patientsRepository.patientChanged.emit(this.patients);
  }

  ngOnInit(): void {
    this.patientsRepository.patientChanged.subscribe((changed) => {
      console.log("Changed ngOnInit");
      
      this.patients = changed;
    });
  }


}
