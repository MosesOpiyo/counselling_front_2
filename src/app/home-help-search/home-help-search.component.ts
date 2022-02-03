import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { AccountService } from '../accountservice/accountservice.service';
import { DomSanitizer,SafeResourceUrl } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home-help-search',
  templateUrl: './home-help-search.component.html',
  styleUrls: ['./home-help-search.component.css']
})
export class HomeHelpSearchComponent implements OnInit {
  
  user:any
  isLoading:Boolean;
  error:string = '';
  response:any = {};
  cloudinary = environment.CLOUDINARY_URL

  search:any = {keyword:"",maxResults: 50};

  constructor(private accountservice:AccountService,private http:HttpClient, private sanitizer:DomSanitizer) { }

  logout(){
    this.accountservice.logout()
  }

  ngOnInit(): void {
    this.accountservice.client_profile().subscribe((response:any)=>{
      this.user = response['user']
    })
  }
  searchYoutube():void {
    this.isLoading = true;

    const url = 'https://www.googleapis.com/youtube/v3/search';

    const urlParams = new HttpParams()
      .set('part','snippet')
      .set('key','AIzaSyBFfA1yXvduCawQq4_Wh8ix3SRm5LkWKKo')
      .set('q',this.search.keyword)
      .set('maxResults',this.search.maxResults)
    
    const options = { params:urlParams }

    this.http.get<any>(url, options).subscribe(
      (data) =>{
        this.response = data;
        this.isLoading = false;
        console.log(this.response)
      },
      (err) =>{
        this.error = err;
      }
    )
  }
  getVideoSource(id:string): SafeResourceUrl {
    if(id != ''){
      const url = 'https://www.youtube.com/embed/' + id;
      return this.sanitizer.bypassSecurityTrustResourceUrl(url)
    }else{
      return '';
    }
  }

}
