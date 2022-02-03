import { Component, OnInit } from '@angular/core';
import { AccountService } from '../accountservice/accountservice.service';
import { Appintment } from '../appintment';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {
  
  new_appointment = new Appintment("","")
  
  createAppointment(){
    console.log(this.groupform)
    this.accountservice.createAppointment(this.groupform)
  }

  constructor(private accountservice:AccountService, private fb:FormBuilder) { }
  groupform = this.fb.group({
    date:[""],
    topic:[""]
  }) 

  

  ngOnInit(): void {
    

  }

}
