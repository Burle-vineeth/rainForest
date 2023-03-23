import { ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { HiddenService } from 'src/app/hidden.service';
import { PressService } from '../press.service';

@Component({
  selector: 'app-press1',
  templateUrl: './press1.component.html',
  styleUrls: ['./press1.component.css']
})
export class Press1Component {
  @ViewChild('link') lin : any = '';
  linkRef !:any;

  constructor(private changeDet : ChangeDetectorRef,private hidden: HiddenService,private press:PressService) {}
  ngAfterViewInit() {
    // console.log(this.lin.nativeElement.innerText);
    this.linkRef = this.lin?.nativeElement?.innerText;
    this.changeDet.detectChanges();
    this.press.pressMode(this.lin);
  }
  ngAfterContentInit() {
    this.lin = this.lin?.nativeElement?.innerText;
  }
}
