import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HiddenService {

  constructor() { }
  hide: boolean = false;
  normalHide = new EventEmitter();
  hidi() {
    this.hide = !this.hide;
    this.normalHide.emit(this.hide);
  }
  headColor = new EventEmitter();
  pressUrl = new EventEmitter();
  color = false;
  headerColor(valueUrl:any) {
    if(valueUrl == '/') {
      this.color = true;
    } else {
      this.color = false;
    }
    this.headColor.emit(this.color);
    this.pressUrl.emit(valueUrl);
  }
}
