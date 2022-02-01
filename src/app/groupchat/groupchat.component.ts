import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { AccountService } from '../accountservice/accountservice.service';
import { Groupchat } from '../groupchat';

@Component({
  selector: 'app-groupchat',
  templateUrl: './groupchat.component.html',
  styleUrls: ['./groupchat.component.css']
})
export class GroupchatComponent implements OnInit {

  constructor(private accountservice:AccountService) { }

  new_text = new Groupchat("")

  @Input()
  group:any;

  form = new FormData()

  @Output() formSubmitEvent = new EventEmitter<FormData>();

  postMessage(){
    this.form.append('text',this.new_text.text)
    this.formSubmitEvent.emit(this.form)
    this.new_text.text = ""
    
  }

  ngOnInit(): void {
  }

}
