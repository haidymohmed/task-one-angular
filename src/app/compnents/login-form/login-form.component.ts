import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})

export class LoginFormComponent implements OnInit {

  username : string  = '';
  password : string = '';
  constructor() { }

  updateName(event : any){
    this.username = event;
  }
  updatePassword(event : any){
    this.username = event;    
  }
  ngOnInit(): void {
  }
}
