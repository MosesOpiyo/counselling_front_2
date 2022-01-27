import { Component, OnInit } from '@angular/core';
import { AccountService } from '../accountservice/accountservice.service';

@Component({
  selector: 'app-counsellor-registration',
  templateUrl: './counsellor-registration.component.html',
  styleUrls: ['./counsellor-registration.component.css']
})
export class CounsellorRegistrationComponent implements OnInit {

  constructor(private accountService:AccountService) { }
  email:any; 
  username:any; 
  password:any;

  

  signUp(){
    let form = new FormData()
    form.append('email',this.email)
    form.append('username',this.username)
    form.append('password',this.password)
    this.accountService.counsellor_register(form)
  }

  ngOnInit(): void {
  }

}
