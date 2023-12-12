import { Component, OnInit } from '@angular/core';
import {CategoryModel } from '../app/models/category.model';
import { Router } from '@angular/router';
import { PatientsRepositoryImp } from './repositories/patient.repository';
import { GenderRepositoryImp } from './repositories/genger.repository';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers : [
    PatientsRepositoryImp,
    GenderRepositoryImp
  ]
})
export class AppComponent implements OnInit{
  constructor(private router : Router){

  }
  ngOnInit(): void {
    this.router.navigate(['login']);
  }
  title = 'task-one';
}
