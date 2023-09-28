import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  navbarOpen = false;
  constructor(private router:Router){

  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  

  seekerhead(){
    this.router.navigate(['./seekerhead'])

  }
}
