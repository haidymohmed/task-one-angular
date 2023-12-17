import { EventEmitter, Inject, Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PatientModel } from "../models/patient.model";
import {Observable} from 'rxjs'

@Injectable()
export class PatientsRepositoryImp {
    patientChanged = new EventEmitter() ;
    private patients : PatientModel[] = [];
    constructor(private http : HttpClient) { }
    /*
    this.http.get('http://localhost:5251/api/Patients')
    
    */
    getAllPatients() :  Observable<any>{
        return this.http.get('http://localhost:5251/api/Patients/GetPatients');
      }
    getPatientById(index : number){
        return this.http.get('http://localhost:5251/api/Patients/GetPatientById?id=' + index);
    }
    addPatient(patient : PatientModel){
        return this.http.post(
            'http://localhost:5251/api/Patients/AddPatient',
            {
                "id": 0,
                "name": patient.name,
                "age": patient.age,
                "birthDate":  patient.birthday,
                "gender": patient.gender
            }
        );
    }
    editPatient(patient : PatientModel , index : number){
        return this.http.put(
            'http://localhost:5251/api/Patients/EditPatient',
            {
                "id": patient.id,
                "name": patient.name,
                "age": patient.age,
                "birthDate":  patient.birthday,
                "gender": patient.gender
            }
        );
    }
    deletePatient(index : number){
        return this.http.delete('http://localhost:5251/api/Patients/delete?id=' + index)
    }
}