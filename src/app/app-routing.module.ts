import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BioMonitoringComponent } from './bio-monitoring/bio-monitoring.component';
import { GetInvolvedComponent } from './get-involved/get-involved.component';
import { HomePageComponent } from './home-page/home-page.component';
import { InvalidPageComponent } from './invalid-page/invalid-page.component';
import { OurimpactComponent } from './ourimpact/ourimpact.component';
import { OurworkComponent } from './ourwork/ourwork.component';
import { PressComponent } from './press/press.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { SayHelloComponent } from './say-hello/say-hello.component';
import { TeamComponent } from './team/team.component';
import { ThreatDetectionComponent } from './threat-detection/threat-detection.component';

const routes: Routes = [
  {path:'',component:HomePageComponent},
  {path:'our_work',component:OurworkComponent},
  {path:'impact',component:OurimpactComponent},
  {path:'threat',component:ThreatDetectionComponent},
  {path:'ecoacoustics',component:BioMonitoringComponent},
  {path:'get_involved',component:GetInvolvedComponent},
  {path:'#contact',component:SayHelloComponent},
  {path:'privacy',component:PrivacyPolicyComponent},
  {path:'team',component:TeamComponent},
  {path:'**',component:InvalidPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
