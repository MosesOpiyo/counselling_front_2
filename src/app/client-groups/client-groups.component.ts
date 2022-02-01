import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AccountService } from '../accountservice/accountservice.service';

@Component({
  selector: 'app-client-groups',
  templateUrl: './client-groups.component.html',
  styleUrls: ['./client-groups.component.css']
})
export class ClientGroupsComponent implements OnInit {

  user:any
  groups:any
  group:any
  constructor(private accountservice:AccountService ,private matsnackbar:MatSnackBar,private route:Router) { }

  logout(){
    this.accountservice.logout()
  }
  join_group(id:number){
    this.accountservice.joinGroup(id).subscribe(response =>{
      this.matsnackbar.open(`Welcome to the group`,"Thank you",{duration:3000})
      console.log(response)
      this.ngOnInit();
    },error=>{
      console.log(error)
    })
   }

  ngOnInit(): void {
    this.accountservice.counsellor_profile().subscribe((response:any)=>{
      this.user = response['user']
    })
    this.accountservice.getGroups().subscribe((response:any)=>{
      this.groups = response['groups']
    })
    this.accountservice.get_client_group().subscribe((response:any)=>{
      this.group = response['group']
      if (this.group == null){
        this.route.navigate(['client_groups'])
      }
      if (this.group != null){
        this.route.navigate(['group'])
      }
    })
  }


}
