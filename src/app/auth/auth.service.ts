import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl="http://devapi.workassist.in/api/v1/admin/otp/generate";
  verifyApi="http://devapi.workassist.in/api/v1/admin/otp/verify"

  constructor(private _http:HttpClient) { }

  getHeaders() {
    let headers = {
      'Content-Type': 'application/json',
    authkey:'yPehu2u7yBe9eguuyAeAugeHaQynuRuyuvyp',
    };
    return headers;
  }

  genrateOtp(data:any):Observable<any>{
    return this._http.post(this.apiUrl,data,{headers:this.getHeaders()})
  }

  verifyOtp(data:any){
    return this._http.post(this.verifyApi,data,{headers:this.getHeaders()})
  }
}
