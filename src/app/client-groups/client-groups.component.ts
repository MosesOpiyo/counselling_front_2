import { Component, OnInit } from '@angular/core';
import { AccountService } from '../accountservice/accountservice.service';

@Component({
  selector: 'app-client-groups',
  templateUrl: './client-groups.component.html',
  styleUrls: ['./client-groups.component.css']
})
export class ClientGroupsComponent implements OnInit {

  user:any
  groups:any
  constructor(private accountservice:AccountService) { }

  logout(){
    this.accountservice.logout()
  }

  ngOnInit(): void {
    this.accountservice.counsellor_profile().subscribe((response:any)=>{
      this.user = response['user']
    })
    this.accountservice.getGroups().subscribe((response:any)=>{
      this.groups = response['groups']
    })
  }


}
