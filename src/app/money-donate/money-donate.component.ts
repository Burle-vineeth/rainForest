import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-money-donate',
  templateUrl: './money-donate.component.html',
  styleUrls: ['./money-donate.component.css']
})
export class MoneyDonateComponent {
  totalMon: number[] = [4000, 2000, 1000, 600, 500, 450];
  giveOnce: number[] = [20000, 10000, 5000, 2000, 1000, 500];
  giveMonthly: number[] = [4000, 2000, 1000, 600, 500, 450];
  constructor(private fb: FormBuilder) { }
  form1 = this.fb.group({
    amount: [450, [Validators.required]],
    permission: [true, [Validators.required]],
    special: [null],
    comment: [''],
  })
  form = this.fb.group({
    commen :[''],
  })
  ngOnInit() {

  }

  currAmt: number = 5;
  inputAmt: number = this.totalMon[this.currAmt];

  mode: boolean = false;
  paymentType() {
    this.mode = !this.mode;
    if (this.mode) {
      this.totalMon = this.giveOnce;
      this.inputAmt = 1000;
      this.currAmt = 4;
    } else {
      this.totalMon = this.giveMonthly;
      this.inputAmt = 450;
      this.currAmt = 5;
    }
  }

  amtChange(index: number) {
    this.currAmt = index;
    this.inputAmt = this.totalMon[this.currAmt];
    this.form1.value.amount = this.totalMon[this.currAmt];
  }

  inputFun() {
    this.form1.value.amount = Number(this.form1.value.amount);
    this.currAmt = -1;
  }

  submitForm1() {
    if(this.form1.valid) {
      console.log("valid");
    } else {
      console.log("invalid");
    }
    console.log(this.form1.value);
  }

  commentBlock : boolean = false;

  AddComment() {
    this.commentBlock = !this.commentBlock;
    this.form1.value.comment = this.form.value.commen;
  }

}
