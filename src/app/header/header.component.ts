import { AbsoluteSourceSpan } from '@angular/compiler';
import { Component, HostListener, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { zip } from 'rxjs';
import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';
import { HiddenService } from '../hidden.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @ViewChildren('work') element: any;
  constructor(private renderer: Renderer2, private matdialog: MatDialog, private _formBuilder: FormBuilder, private hidden: HiddenService) { }
  // @HostListener('click') onMouseClick() {
  //   for(let x in this.element._results) {
  //     this.renderer.setStyle(
  //       this.element._results[x].nativeElement,
  //       'color',
  //       'black',
  //     )
  //   }
  // }

  valueColor = false;
  footerAction1 = false;
  footerAction2 = false;
  footerAction3 = false;
  Zindex = false;
  clickFooterLink = false;
  linkActive = false;

  closeInfoBtn() {
    if(this.clickFooterLink && !this.linkActive) {
      this.clickFooterLink = false;
    }
    if ((this.footerAction1 || this.footerAction2 || this.footerAction3) && !this.clickFooterLink) {
      this.footerAction1 = false;
      this.footerAction2 = false;
      this.footerAction3 = false;
      this.Zindex = false;
    }
  }
  action1() {
    this.clickFooterLink = true;
    this.linkActive = true;
    if (this.footerAction1) {
      this.footerAction1 = !this.footerAction1;
      this.Zindex = false;
    } else {
      this.Zindex = true;
      this.footerAction1 = true;
      this.footerAction2 = false;
      this.footerAction3 = false;
    }
  }
  action2() {
    this.clickFooterLink = true;
    this.linkActive = true
    if (this.footerAction2) {
      this.footerAction2 = !this.footerAction2;
      this.Zindex = false;
    } else {
      this.Zindex = true;
      this.footerAction1 = false;
      this.footerAction2 = true;
      this.footerAction3 = false;
    }
  }
  action3() {
    this.clickFooterLink = true;
    this.linkActive = true;
    if (this.footerAction3) {
      this.footerAction3 = !this.footerAction3;
      this.Zindex = false;
    } else {
      this.Zindex = true;
      this.footerAction1 = false;
      this.footerAction2 = false;
      this.footerAction3 = true;
    }
  }

  ngOnInit() {
    this.hidden.headColor.subscribe((param) => {
      this.valueColor = param;
    })
  }

  showModal: boolean = false;

  DisplayShowModal() {
    this.openDonateModal();
  }

  donate = false;

  openDonateModal() {
    this.showModal = !this.showModal;
    this.hidden.hidi();
    if(this.donate) {

      setTimeout(() => {
        this.sendDonateBtn();
      },1000)
    }
    this.donate = !this.donate;
  }
  giftAmount = 450;
  giftValueShow = false;
  sendDonateBtn() {
    this.giftValueShow = true;
  }

  notToday() {
    this.giftValueShow = false;
  }

  first = true;
  changeTab(): void {
    this.first = !this.first;
  }
}
