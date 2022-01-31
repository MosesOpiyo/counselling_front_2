import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../accountservice/accountservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private accountService:AccountService,private route:Router) { }

  email: any;
  password: any;
  role:any
 

  loginUser(){
    let form = new FormData();
    form.append('username',this.email),
    form.append('password',this.password),
    this.accountService.login(form)
  }

  ngOnInit(): void {
    
  }

}