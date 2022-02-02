import { Component, OnInit } from '@angular/core';
import { AccountService } from '../accountservice/accountservice.service';
import Pusher from 'pusher-js';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  user:any
  constructor(private accountservice:AccountService,private http:HttpClient) { }
  message = '';
  messages:any[] = [];

  

  logout(){
    this.accountservice.logout()
  }

  ngOnInit(): void {
    this.accountservice.counsellor_profile().subscribe((response:any)=>{
      this.user = response['user']
    })
    Pusher.logToConsole = true;

    const pusher = new Pusher('9415d7ccf1dd753502e4', {
      cluster: 'ap2'
    });

    const channel = pusher.subscribe('chat');
    channel.bind('message', data => {
      this.messages.push(data);
    });
  }
  submit():void {
    this.http.post(`${environment.BASE_URL}counsultion/messages`, {
      message:this.message
    }).subscribe(() => this.message = '');

  }

}
