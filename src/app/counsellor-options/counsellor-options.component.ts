import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AccountService } from '../accountservice/accountservice.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-counsellor-options',
  templateUrl: './counsellor-options.component.html',
  styleUrls: ['./counsellor-options.component.css']
})
export class CounsellorOptionsComponent implements OnInit {

  user:any
  counsellors:any
  counsellor:any
  cloudinary = environment.CLOUDINARY_URL

  join_counsellor(id:number){
    this.accountservice.joinCounsellor(id).subscribe(response =>{
      this.matsnackbar.open(`Congratulations you now have a mentor through this journey`,"Thank you",{duration:3000})
      console.log(response)
      this.ngOnInit();
    },error=>{
      console.log(error)
    })
   }

  constructor(private accountservice:AccountService,private route:Router,private matsnackbar:MatSnackBar) { }

  logout(){
    this.accountservice.logout()
  }

  ngOnInit(): void {
    this.accountservice.client_profile().subscribe((response:any)=>{
      this.user = response['user']
    })
    this.accountservice.getCounsellors().subscribe((response:any)=>{
      this.counsellors = response
    
    })
    this.accountservice.clientsCounsellor().subscribe((response:any)=>{
      this.counsellor = response["counsellor"]
      
      if(this.counsellor == null){
        this.route.navigate(['counsellor_options'])
      }
      if(this.counsellor != null){
        this.route.navigate(['counsellor'])
      }
    })
  }

}
