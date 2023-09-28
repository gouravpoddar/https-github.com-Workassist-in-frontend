import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent { 

 
//  ReadMore:boolean = true

 
//  visible:boolean = false


 
//  onclick()
//  {
//    this.ReadMore = !this.ReadMore; 
//    this.visible = !this.visible
//  }

sidebarOpen = false;

  toggleSidenav(): void {
    this.sidebarOpen = !this.sidebarOpen;
  }
}
