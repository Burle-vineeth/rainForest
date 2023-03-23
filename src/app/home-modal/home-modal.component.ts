import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-home-modal',
  templateUrl: './home-modal.component.html',
  styleUrls: ['./home-modal.component.css']
})
export class HomeModalComponent {

  constructor(private matdialog: MatDialog) {}

  closeModalhome() {
    this.matdialog.closeAll();
  }
}
