import { Component, OnInit } from '@angular/core';
import { AccountService } from '../accountservice/accountservice.service';

@Component({
  selector: 'app-group-form',
  templateUrl: './group-form.component.html',
  styleUrls: ['./group-form.component.css']
})
export class GroupFormComponent implements OnInit {

  constructor(private accountservice:AccountService) { }

  name:any
  bio:any

  createGroup(){
    let form = new FormData();
    form.append('name',this.name)
    form.append('bio',this.bio)
    this.accountservice.createGroup(form)
  }

  ngOnInit(): void {
  }

}
