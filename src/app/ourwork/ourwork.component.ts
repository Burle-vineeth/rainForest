import { Component } from '@angular/core';

@Component({
  selector: 'app-ourwork',
  templateUrl: './ourwork.component.html',
  styleUrls: ['./ourwork.component.css']
})
export class OurworkComponent {
  deforestation = true;
  poaching = false;
  monitoring = false;
  cutter() {
    this.deforestation = true;
    this.poaching = false;
    this.monitoring = false;
  }
  elephant() {
    this.deforestation = false;
    this.poaching = true;
    this.monitoring = false;
  }
  wavelength() {
    this.deforestation = false;
    this.poaching = false;
    this.monitoring = true;
  }
}
