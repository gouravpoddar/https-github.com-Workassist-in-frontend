import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  isCollapsed: boolean = false;
  result:any
  dataValue:any
  moduleValue:any

constructor(private router:Router,private _service:AdminService){
  localStorage.getItem('AuthKey')
  localStorage.getItem('mobile')


}

ngOnInit(){  
  this._service.lsitMenu().subscribe((response)=>{
    // console.log(response)
    this.result = response
    this.dataValue = this.result.data
    console.log(this.dataValue,'datavalue------')
    // this.moduleValue = this.dataValue.modules
    // console.log(this.moduleValue,'result--')

    

}) 
}

  logout(){
    localStorage.removeItem('AuthKey')
    localStorage.removeItem('mobile')
    this.router.navigate(['admin/login'])

  }

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
  }
}
