import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';

import { environment } from 'src/environments/environment';
import { AuthService } from '../authservice/authservice.service';

@Injectable({
  providedIn: 'root'
})
export class GroupserviceService {

  constructor(private http:HttpClient, private auth:AuthService, private snackbar:MatSnackBar, private route:Router) { }
  createGroup(group:any){
    for (var pair of group.entries()) {
      console.log(pair[0]+ ', ' + pair[1]); 
  }
}
