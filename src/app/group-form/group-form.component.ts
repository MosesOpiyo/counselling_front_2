import { Component, OnInit } from '@angular/core';
import { AccountService } from '../accountservice/accountservice.service';
import { Group } from '../group';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-group-form',
  templateUrl: './group-form.component.html',
  styleUrls: ['./group-form.component.css']
})
export class GroupFormComponent implements OnInit {

  new_group = new Group("","")

  createGroup(){
    console.log(this.groupform)
    this.accountservice.createGroup(this.groupform)
  }


  constructor(private accountservice:AccountService,private fb:FormBuilder) { }
  groupform = this.fb.group({
    name:[""],
    bio:[""]
  }) 
  
  ngOnInit(): void {
  }

}
