import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { Header1Component } from './header1/header1.component';
import { AlertComponent } from './alert/alert.component';
import { Header2Component } from './header2/header2.component';
import { PasswordRecoveryComponent } from './password-recovery/password-recovery.component';
import { ContactComponent } from './contact/contact.component';
import { DetailsComponent } from './details/details.component';
import { DdosDetectionComponent } from './ddos-detection/ddos-detection.component';
import { MalwareDetectionComponent } from './malware-detection/malware-detection.component';
import { BruteforceDetectionComponent } from './bruteforce-detection/bruteforce-detection.component';
import { SqlinjectionDetectionComponent } from './sqlinjection-detection/sqlinjection-detection.component';
import { PhshingDetectionComponent } from './phshing-detection/phshing-detection.component';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './about/about.component';
import { Footer2Component } from './footer2/footer2.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    Header1Component,
    AlertComponent,
    Header2Component,
    PasswordRecoveryComponent,
    ContactComponent,
    DetailsComponent,
    DdosDetectionComponent,
    MalwareDetectionComponent,
    BruteforceDetectionComponent,
    SqlinjectionDetectionComponent,
    PhshingDetectionComponent,
    AboutComponent,
    Footer2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
