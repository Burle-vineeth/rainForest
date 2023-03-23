import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})
export class SubscribeComponent {
  constructor(private fb: FormBuilder) {}
  userDetails:FormGroup = this.fb.group( {
    name: ['',[Validators.required]],
    mail: ['',[Validators.required]],
  })
  errorMsg = '';
  submitForm() {
    if(this.userDetails.valid) {
      console.log("submitted");
      this.errorMsg = "";
    } else {
      if(!this.userDetails.value.name) {
        this.errorMsg =  "user name is required";
      } else if(!this.userDetails.value.mail) {
        this.errorMsg= "Email is required";
      } else {
        this.errorMsg = "Enter correct format for the email";
      }
    }
  }
}
