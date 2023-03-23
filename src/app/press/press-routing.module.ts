import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PressComponent } from './press.component';
import { Press1Component } from './press1/press1.component';
import { Press2Component } from './press2/press2.component';
import { Press3Component } from './press3/press3.component';
import { Press4Component } from './press4/press4.component';
import { Press5Component } from './press5/press5.component';
import { Press6Component } from './press6/press6.component';
import { SingleComponent } from './single/single.component';

const routes: Routes = [
  {path:'press',component:PressComponent,children:[
    {path:'',component:Press1Component},
    {path:'1',component:Press1Component},
    {path:'2',component:Press2Component},
    {path:'3',component:Press3Component},
    {path:'4',component:Press4Component},
    {path:'5',component:Press5Component},
    {path:'6',component:Press6Component},
    {path:':id',component:SingleComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PressRoutingModule { }
