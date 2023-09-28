import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboardheader',
  templateUrl: './dashboardheader.component.html',
  styleUrls: ['./dashboardheader.component.scss']
})
export class DashboardheaderComponent {
  constructor(private router:Router){
    localStorage.getItem('AuthKey')
    localStorage.getItem('mobile')
  }
  
  logout(){
    localStorage.removeItem('AuthKey')
    localStorage.removeItem('mobile')
    this.router.navigate(['admin/login'])

  }

}
