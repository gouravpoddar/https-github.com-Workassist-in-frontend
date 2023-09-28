import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiurl = "http://devapi.workassist.in/api/v1/admin/users";
  createApiUrl = "http://devapi.workassist.in/api/v1/admin/user/create";
  updateApiUrl = "http://devapi.workassist.in/api/v1/admin/user/update";
  departmentApiUrl="http://devapi.workassist.in/api/v1/admin/departments";
  roleApiUrl="http://devapi.workassist.in/api/v1/admin/roles";

  rolePermissionListApi = "http://devapi.workassist.in/api/v1/admin/modules";
  




  constructor(private _http:HttpClient) { }

  getHeaders(){
    let headers = {
      'Content-Type': 'application/json',
      authkey:'a213d00ad5d1d16651c6a87be21d03d4',
      };
      return headers;
    
  }

  get():Observable<any>{
    return this._http.get(this.apiurl,{headers:this.getHeaders()}) 

  }

  create(data:any):Observable<any>{
    return this._http.post(this.createApiUrl,data,{headers:this.getHeaders()})
  }

  department(){
    return this._http.get(this.departmentApiUrl,{headers:this.getHeaders()})
  }

  role(){
    return this._http.get(this.roleApiUrl,{headers:this.getHeaders()})
  }

  update(id:any){
    return this._http.post(`${this.updateApiUrl}/${id}`,{headers:this.getHeaders()})
  }

  rolePermissionList(){
    return this._http.get(this.rolePermissionListApi,{headers:this.getHeaders()})
  }
}
