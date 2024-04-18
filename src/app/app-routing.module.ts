import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'header1', component: Header1Component },
  { path: 'header2', component: Header2Component },
  { path: 'alert', component: AlertComponent },
  { path: 'password-recovery', component: PasswordRecoveryComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'details', component: DetailsComponent },
  { path: 'ddos', component: DdosDetectionComponent },
  { path: 'malware', component: MalwareDetectionComponent },
  { path: 'bruteforce', component: BruteforceDetectionComponent },
  { path: 'sql', component: SqlinjectionDetectionComponent },
  { path: 'phishing', component: PhshingDetectionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
