import { EventEmitter, Inject, Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { PatientModel } from "../models/patient.model";
import {Observable} from 'rxjs'

@Injectable()
export class PatientsRepositoryImp {
    patientChanged = new EventEmitter<PatientModel[]>() ;
    private patients : PatientModel[] = [];
    constructor(private http : HttpClient) { }
    /*
    this.http.get('http://localhost:5251/api/Patients')
    
    */
    getAllPatients() :  Observable<any>{
        console.log("TEST");
        console.log(this.http.get('http://localhost:5251/api/Patients'));
        
        return this.http.get('http://localhost:5251/api/Patients');
      }
    getPatientById(index : number){
        return this.patients[index];
    }
    addPatient(patient : PatientModel){
        this.patients.push(patient);
        this.patientChanged.emit(this.patients);
    }
    editPatient(patient : PatientModel , index : number){
        this.patients[index] = patient ;
        this.patientChanged.emit(this.patients);
    }
    deletePatient(index : number){
        if (index !== -1) {
            this.patients.splice(index, 1);
        }
        console.log(this.patients);
        this.patientChanged.emit(this.patients);
    }
}