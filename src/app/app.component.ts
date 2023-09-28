import { Component } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private http:HttpClient){}

  
  title = 'angular';
  AUTH_API = 'http://localhost:8080/api/auth/';

   httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  ngOnInit(){
    this.register
    
  }

  register(username: string, email: string, password: string) {
     this.http.post(this.AUTH_API + 'signup',{username,email,password},this.httpOptions
    ).subscribe((result)=>{
      console.log(result,'result------')

    });
  }
}
