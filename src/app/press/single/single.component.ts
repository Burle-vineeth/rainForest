import { Component } from '@angular/core';
import { HiddenService } from 'src/app/hidden.service';
import { PressService } from '../press.service';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent {

  constructor(private hidden: HiddenService,private press: PressService) {}
  head: any;
  ngOnInit() {
    // this.hidden.pressUrl.subscribe( (param) => {
    //   console.log(param);
    // })
    // this.press.pressUrl.subscribe( (param) => {
    //   console.log(param,'vin');
    // })

    this.head = this.press.val;
  }

}
