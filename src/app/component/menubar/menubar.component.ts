import { Component } from '@angular/core';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent {
  badgevisible = false;
  noti = "notifications";
  badgevisibility(){
    this.badgevisible = !this.badgevisible;
    this.noti = "notifications_off";
    if(!this.badgevisible){
      this.noti = "notifications";
    }
  }
}
