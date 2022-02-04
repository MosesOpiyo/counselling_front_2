import { Component, OnInit } from '@angular/core';
import { AccountService } from '../accountservice/accountservice.service';
import { environment } from 'src/environments/environment';

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
  profile_pic:any
  cloudinary = environment.CLOUDINARY_URL
  
  onImageChange(event:any){
    this.profile_pic = event.target.files[0]
  }

  signUp(){
    let form = new FormData()
    form.append('email',this.email)
    form.append('username',this.username)
    form.append('profile_pic',this.profile_pic)
    form.append('password',this.password)
    this.accountService.counsellor_register(form)
  }

  ngOnInit(): void {
  }

}
