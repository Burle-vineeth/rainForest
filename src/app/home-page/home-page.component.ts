import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  @ViewChild('audio') sound:any;
  playSound : boolean = false;
  constructor() {}
  audioPlay() {
    // console.log("audio");
    this.playSound = true;
    this.sound.nativeElement.play();
  }

  pause() {
    this.playSound = false;
    this.sound.nativeElement.pause();
  }
}
