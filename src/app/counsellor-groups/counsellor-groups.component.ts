import { Component, OnInit } from '@angular/core';
import { AccountService } from '../accountservice/accountservice.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-counsellor-groups',
  templateUrl: './counsellor-groups.component.html',
  styleUrls: ['./counsellor-groups.component.css']
})
export class CounsellorGroupsComponent implements OnInit {

  user:any
  groups:any
  cloudinary = environment.CLOUDINARY_URL

  constructor(private accountservice:AccountService) { }

  logout(){
    this.accountservice.logout()
  }

  ngOnInit(): void {

    this.accountservice.counsellor_profile().subscribe((response:any)=>{
      this.user = response['user']
    })
    this.accountservice.counsellor_profile().subscribe((response:any)=>{

    })
    this.accountservice.getGroups().subscribe((response:any)=>{
      this.groups = response['groups']
    })
    

   
  }

}
