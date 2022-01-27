import { Component, OnInit } from '@angular/core';
import { AccountService } from '../accountservice/accountservice.service';

@Component({
  selector: 'app-counsellor-options',
  templateUrl: './counsellor-options.component.html',
  styleUrls: ['./counsellor-options.component.css']
})
export class CounsellorOptionsComponent implements OnInit {

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
