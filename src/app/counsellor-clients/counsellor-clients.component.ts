import { Component, OnInit } from '@angular/core';
import { AccountService } from '../accountservice/accountservice.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-counsellor-clients',
  templateUrl: './counsellor-clients.component.html',
  styleUrls: ['./counsellor-clients.component.css']
})
export class CounsellorClientsComponent implements OnInit {

  user:any
  clients:any
  cloudinary = environment.CLOUDINARY_URL
  constructor(private accountservice:AccountService) { }

  logout(){
    this.accountservice.logout()
  }

  ngOnInit(): void {
    this.accountservice.counsellor_profile().subscribe((response:any)=>{
      this.user = response['user']

      this.accountservice.getClients(this.user.id).subscribe((response:any)=>{
        this.clients = response['clients']
        console.log(this.clients)
      })
    })
  }
}
