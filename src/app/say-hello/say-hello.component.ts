import { Component } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import {FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-say-hello',
  templateUrl: './say-hello.component.html',
  styleUrls: ['./say-hello.component.css']
})
export class SayHelloComponent {
  constructor(private fb: FormBuilder) {}
  sayHello : FormGroup = this.fb.group({
    mail : [''],
    subject : [''],
    message : [''],
  })

  submitForm() {
    console.log("form has submitted");
  }
  
}
