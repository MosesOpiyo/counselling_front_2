import { Component, OnInit } from '@angular/core';
import { AccountService } from '../accountservice/accountservice.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  profile_pic:any
  cloudinary = environment.CLOUDINARY_URL
  
  onImageChange(event:any){
    this.profile_pic = event.target.files[0]
  }

  constructor(private accountService:AccountService) { }
  email:any; 
  username:any; 
  password:any;

  

  signUp(){
    let form = new FormData()
    form.append('email',this.email)
    form.append('username',this.username)
    form.append('profile_pic',this.profile_pic)
    form.append('password',this.password)
    this.accountService.register(form)
  }

  ngOnInit(): void {
  }

}