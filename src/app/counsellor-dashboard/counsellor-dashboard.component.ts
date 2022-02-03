import { Component, OnInit } from '@angular/core';
import { AccountService } from '../accountservice/accountservice.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-counsellor-dashboard',
  templateUrl: './counsellor-dashboard.component.html',
  styleUrls: ['./counsellor-dashboard.component.css']
})
export class CounsellorDashboardComponent implements OnInit {

  user:any
  appointments:any
  cloudinary = environment.CLOUDINARY_URL

  constructor(private accountservice:AccountService) { }

  logout(){
    this.accountservice.logout()
  }

  ngOnInit(): void {
    this.accountservice.counsellor_profile().subscribe((response:any)=>{
      this.user = response['user']
      console.log(this.user) 
    })
    this.accountservice.get_client_appointment().subscribe((response:any)=>{
      this.appointments = response['appointments']
      console.log(this.appointments)
    })
  
  }

}
