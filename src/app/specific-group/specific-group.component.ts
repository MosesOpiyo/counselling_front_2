import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AccountService } from '../accountservice/accountservice.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-specific-group',
  templateUrl: './specific-group.component.html',
  styleUrls: ['./specific-group.component.css']
})
export class SpecificGroupComponent implements OnInit {
  
  group:any
  user:any
  messages:any
  
  cloudinary = environment.CLOUDINARY_URL

  postMessage(event:FormData){


    this.accountservice.postGroupMessages(event,this.group['id']).subscribe(response => {
      this.ngOnInit()
    },error => {
     this.matsnackbar.open(`There was a problem posting the report`,"thank you",{duration:3000})
     console.log(error)
    })
  }

  logout(){
    this.accountservice.logout()
  }

  constructor(private accountservice:AccountService,private matsnackbar:MatSnackBar) { }

  ngOnInit(): void {
    this.accountservice.client_profile().subscribe((response:any)=>{
      this.user = response['user']
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
