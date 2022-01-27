import { Component, OnInit } from '@angular/core';
import { AccountService } from '../accountservice/accountservice.service';

@Component({
  selector: 'app-counsellor-clients',
  templateUrl: './counsellor-clients.component.html',
  styleUrls: ['./counsellor-clients.component.css']
})
export class CounsellorClientsComponent implements OnInit {

  user:any
  constructor(private accountservice:AccountService) { }

  logout(){
    this.accountservice.logout()
  }

  ngOnInit(): void {
    this.accountservice.counsellor_profile().subscribe((response:any)=>{
      this.user = response['user']
    })
  }
}
