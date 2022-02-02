import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../accountservice/accountservice.service';

@Component({
  selector: 'app-client-dashboard',
  templateUrl: './client-dashboard.component.html',
  styleUrls: ['./client-dashboard.component.css']
})
export class ClientDashboardComponent implements OnInit {
  user:any
  role:any

  constructor(private accountservice:AccountService,private route:Router) { }

  logout(){
    this.accountservice.logout()
  }
  
  ngOnInit(): void {
    this.accountservice.client_profile().subscribe((response:any)=>{
      this.user = response['user']
    })
    
  }

}