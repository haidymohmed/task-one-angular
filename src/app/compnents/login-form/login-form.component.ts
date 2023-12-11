import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})

export class LoginFormComponent implements OnInit {

  constructor() { }


  login(form : NgForm){
    console.log(form.value.name);
    console.log(form.value.password);
    
  }
  ngOnInit(): void {
  }
}
