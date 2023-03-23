import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { HomePageComponent } from './home-page/home-page.component';
import { SayHelloComponent } from './say-hello/say-hello.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { OurworkComponent } from './ourwork/ourwork.component';
import {MatTabsModule} from '@angular/material/tabs';
import { OurimpactComponent } from './ourimpact/ourimpact.component';
import { ImpactInfoComponent } from './impact-info/impact-info.component';
import { ThreatDetectionComponent } from './threat-detection/threat-detection.component';
import { BioMonitoringComponent } from './bio-monitoring/bio-monitoring.component';
import { HomeModalComponent } from './home-modal/home-modal.component'; 
import { MatDialogModule } from '@angular/material/dialog';
import { GetInvolvedComponent } from './get-involved/get-involved.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MoneyDonateComponent } from './money-donate/money-donate.component';
import { CryptoDonateComponent } from './crypto-donate/crypto-donate.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { InvalidPageComponent } from './invalid-page/invalid-page.component';
import { TeamComponent } from './team/team.component';
import { PressModule } from './press/press.module';
import { SubscribeModule } from './subscribe/subscribe.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomePageComponent,
    SayHelloComponent,
    OurworkComponent,
    OurimpactComponent,
    ImpactInfoComponent,
    ThreatDetectionComponent,
    BioMonitoringComponent,
    HomeModalComponent,
    GetInvolvedComponent,
    MoneyDonateComponent,
    CryptoDonateComponent,
    PrivacyPolicyComponent,
    InvalidPageComponent,
    TeamComponent,
  ],
  imports: [
    BrowserModule,
    SubscribeModule,
    PressModule,
    AppRoutingModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
