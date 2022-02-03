import { Component, OnInit } from '@angular/core';
import { AccountService } from '../accountservice/accountservice.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-specific-counsellor',
  templateUrl: './specific-counsellor.component.html',
  styleUrls: ['./specific-counsellor.component.css']
})
export class SpecificCounsellorComponent implements OnInit {
  
  counsellor:any
  user:any
  group:any
  messages:any

  cloudinary = environment.CLOUDINARY_URL

  constructor(private accountservice:AccountService) { }
  

  logout(){
    this.accountservice.logout()
  }

  ngOnInit(): void {
    this.accountservice.clientsCounsellor().subscribe((response:any)=>{
      this.counsellor = response["counsellor"]
      console.log(this.counsellor)
    })
    this.accountservice.client_profile().subscribe((response:any)=>{
      this.user = response['user']
    })
    this.accountservice.get_client_group().subscribe((response:any)=>{
      this.group = response['group']
    })
    
  }
}
