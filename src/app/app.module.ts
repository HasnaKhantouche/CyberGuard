import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
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
import { HttpClientModule, HttpClient } from '@angular/common/http';
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
import { RouterModule } from '@angular/router';
import { TeamComponent } from './team/team.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { VueAnalystComponent } from './vue-analyst/vue-analyst.component';
import { VueAdminComponent } from './vue-admin/vue-admin.component';
import { TermsComponent } from './terms/terms.component';
import { PrivacyComponent } from './privacy/privacy.component';


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
    Footer2Component,
    FeedbackComponent,
    UserManagementComponent,
    AlertSqlComponent,
    AlertBruteComponent,
    AlertMalwareComponent,
    AlertPhishingComponent,
    DetailsSqlComponent,
    DetailsMalwareComponent,
    DetailsBruteforceComponent,
    DetailsPhishingComponent,
    TeamComponent,
    LoginComponent,
    SignupComponent,
    VueAnalystComponent,
    VueAdminComponent,
    TermsComponent,
    PrivacyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
 
 }
