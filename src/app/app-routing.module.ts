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
import { AboutComponent } from './about/about.component';
import { Footer2Component } from './footer2/footer2.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { AlertSqlComponent } from './alert-sql/alert-sql.component';
import { AlertBruteComponent } from './alert-brute/alert-brute.component';
import { AlertMalwareComponent } from './alert-malware/alert-malware.component';
import { AlertPhishingComponent } from './alert-phishing/alert-phishing.component';
import { DetailsSqlComponent } from './details-sql/details-sql.component';
import { DetailsMalwareComponent } from './details-malware/details-malware.component';
import { DetailsBruteforceComponent } from './details-bruteforce/details-bruteforce.component';
import { DetailsPhishingComponent } from './details-phishing/details-phishing.component';
import { TeamComponent } from './team/team.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { VueAnalystComponent } from './vue-analyst/vue-analyst.component';
import { VueAdminComponent } from './vue-admin/vue-admin.component';
import { TermsComponent } from './terms/terms.component';
import { PrivacyComponent } from './privacy/privacy.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'header1', component: Header1Component },
  { path: 'header2', component: Header2Component },
  { path: 'alert-ddos', component: AlertComponent },
  { path: 'password-recovery', component: PasswordRecoveryComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'details-ddos', component: DetailsComponent },
  { path: 'ddos', component: DdosDetectionComponent },
  { path: 'malware', component: MalwareDetectionComponent },
  { path: 'bruteforce', component: BruteforceDetectionComponent },
  { path: 'sql', component: SqlinjectionDetectionComponent },
  { path: 'phishing', component: PhshingDetectionComponent },
  { path: 'footer2', component: Footer2Component },
  { path: 'about', component: AboutComponent },
  { path: 'feedback', component: FeedbackComponent },
  { path: 'user-management', component: UserManagementComponent },
  { path: 'alert-sql', component: AlertSqlComponent },
  { path: 'alert-brute', component: AlertBruteComponent },
  { path: 'alert-malware', component: AlertMalwareComponent },
  { path: 'alert-phishing', component: AlertPhishingComponent },
  { path: 'details-malware', component:  DetailsMalwareComponent },
  { path: 'details-brute', component: DetailsBruteforceComponent },
  { path: 'details-phishing', component: DetailsPhishingComponent },
  { path: 'details-sql', component: DetailsSqlComponent },
  { path: 'team', component: TeamComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'vue-analyst', component: VueAnalystComponent },
  { path: 'vue-admin', component: VueAdminComponent },
  { path: 'terms', component: TermsComponent },
  { path: 'privacy', component: PrivacyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
