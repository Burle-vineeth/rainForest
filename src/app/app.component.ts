import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'
import { NavigationEnd, Router } from '@angular/router';
import { HiddenService } from './hidden.service';
import { HomeModalComponent } from './home-modal/home-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Rainforest';

  constructor(private matdialog: MatDialog,private hidden: HiddenService,private router: Router) {}
  hide : boolean = false;
  ngOnInit() {
    setTimeout( () => {
      this.matdialog.open(HomeModalComponent,{
        disableClose:true,
      });
    },5000);
    this.hidden.normalHide.subscribe( (param) => {
      this.hide = param;
    })

    this.router.events.subscribe( (param) => {
      if(param instanceof NavigationEnd) {
        this.hidden.headerColor(param.url);
      }
    })
  }
}
