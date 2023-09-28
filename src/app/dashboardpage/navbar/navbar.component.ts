import { Component } from '@angular/core';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
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
