import { Component, ElementRef, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginRepositoryImp } from 'src/app/repositories/login.repository';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
  providers:[
    LoginRepositoryImp
  ]
})

export class LoginFormComponent implements OnInit {

  constructor(private router : Router , private loginRespoitory : LoginRepositoryImp) { 
  }


  login(form : NgForm){
    if(this.loginRespoitory.login(form.value.name,form.value.password) ){
      this.router.navigate(['../patients']);
      alert('Login successful!');
    }else{
      alert('Invalid username or password!');
    }
  }
  ngOnInit(): void {
  }
}
