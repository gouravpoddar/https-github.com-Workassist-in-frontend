import { Component } from '@angular/core';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent {

  isNavigationOpen = false;


  toggleNavigation() {
    this.isNavigationOpen = !this.isNavigationOpen;
    
  }
  closeNavigation(){
    this.isNavigationOpen = false
  }
  


}
