import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../accountservice/accountservice.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-client-dashboard',
  templateUrl: './client-dashboard.component.html',
  styleUrls: ['./client-dashboard.component.css']
})
export class ClientDashboardComponent implements OnInit {
  user:any
  role:any
  group:any
  messages:any
  cloudinary = environment.CLOUDINARY_URL
  constructor(private accountservice:AccountService,private route:Router) { }

  logout(){
    this.accountservice.logout()
  }
  
  ngOnInit(): void {
    this.accountservice.client_profile().subscribe((response:any)=>{
      this.user = response['user']
      console.log(this.user)
    })
    this.accountservice.get_client_group().subscribe((response:any)=>{
      this.group = response['group']
      this.accountservice.getGroupMessages(this.group.id).subscribe((response:any) =>{
        this.messages = response
        console.log(this.messages)
    },error =>{
        console.log(error)
    })
    })
  }

}