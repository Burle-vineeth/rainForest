import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

interface Food {
  value: number;
  viewValue: string;
}

@Component({
  selector: 'app-crypto-donate',
  templateUrl: './crypto-donate.component.html',
  styleUrls: ['./crypto-donate.component.css']
})
export class CryptoDonateComponent {

  coins: Food[] = [
    {value: 4000, viewValue: 'Bitcoin'},
    {value: 2300, viewValue: 'Etherum'},
    {value: 88, viewValue: 'USD Coin'},
    {value: 23, viewValue : 'Doge Coin'}
  ];

  constructor(private fb: FormBuilder) { }
  // @ViewChild('coinValue') coin!: ElementRef;
  inDol:any = '';
  currentCoin!: any;
  selectedCoin(coin:any) {
    this.currentCoin = coin;
    this.inDol= Number(this.form1.value.amount) * coin.value;
  }
  form1 = this.fb.group({
    amount: [0.2, [Validators.required]],
    permission: [true, [Validators.required]],
    special: [null],
    comment: [''],
  })
  form = this.fb.group({
    commen :[''],
  })
  ngOnInit() {

  }

  inputFun() {
    this.form1.value.amount = Number(this.form1.value.amount);
    this.inDol = this.form1.value.amount* this.currentCoin.value;
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
