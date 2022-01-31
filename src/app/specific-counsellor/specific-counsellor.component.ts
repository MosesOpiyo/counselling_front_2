import { Component, OnInit } from '@angular/core';
import { AccountService } from '../accountservice/accountservice.service';


@Component({
  selector: 'app-specific-counsellor',
  templateUrl: './specific-counsellor.component.html',
  styleUrls: ['./specific-counsellor.component.css']
})
export class SpecificCounsellorComponent implements OnInit {
  
  counsellor:any
 
  constructor(private accountservice:AccountService) { }
  

  logout(){
    this.accountservice.logout()
  }

  ngOnInit(): void {
    this.accountservice.clientsCounsellor().subscribe((response:any)=>{
      this.counsellor = response["counsellor"]
      console.log(this.counsellor)
    })
    
  }
}
