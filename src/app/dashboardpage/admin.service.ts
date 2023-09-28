import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  apiUrl="http://devapi.workassist.in/api/v1/admin/menu"

  constructor(private _http:HttpClient) { }

  getHeaders() {
    let headers = {
      'Content-Type': 'application/json',
    authkey:'a213d00ad5d1d16651c6a87be21d03d4',
    };
    return headers;
  }

  lsitMenu():Observable<any>{
    return this._http.get(this.apiUrl,{headers:this.getHeaders()})
  }
}
