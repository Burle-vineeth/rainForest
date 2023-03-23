import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PressService {

  constructor() { }
  pressUrl = new EventEmitter();
  val = "";
  pressMode(value:any) {
    this.pressUrl.emit(value.nativeElement.innerText);
    this.val = value.nativeElement.innerText;
  }
}
