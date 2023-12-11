import { Component, OnInit } from '@angular/core';
import { PatientModel } from 'src/app/models/patient.model';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
  }

}
