import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PressRoutingModule } from './press-routing.module';
import { Press1Component } from './press1/press1.component';
import { Press2Component } from './press2/press2.component';
import { PressComponent } from './press.component';
import { SubscribeModule } from '../subscribe/subscribe.module';
import { Press3Component } from './press3/press3.component';
import { Press4Component } from './press4/press4.component';
import { Press5Component } from './press5/press5.component';
import { Press6Component } from './press6/press6.component';
import { SingleComponent } from './single/single.component';


@NgModule({
  declarations: [
    Press1Component,
    Press2Component,
    PressComponent,
    Press3Component,
    Press4Component,
    Press5Component,
    Press6Component,
    SingleComponent,
  ],
  imports: [
    CommonModule,
    PressRoutingModule,
    SubscribeModule,
  ]
})
export class PressModule { }
