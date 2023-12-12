import { EventEmitter, Inject, Injectable } from "@angular/core";
import { PatientModel } from "../models/patient.model";

@Injectable()
export class PatientsRepositoryImp {
    patientChanged = new EventEmitter<PatientModel[]>() ;
    private patients : PatientModel[] = [
        new PatientModel("haidy" , 23 , '2001-05-28',2)
    ];

    getAllPatients(){
        console.log(this.patients);
        
        return this.patients.slice();
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