import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { ClientDashboardComponent } from './client-dashboard/client-dashboard.component';
import { CounsellorOptionsComponent } from './counsellor-options/counsellor-options.component';
import { ClientGroupsComponent } from './client-groups/client-groups.component';
import { CounsellorLoginComponent } from './counsellor-login/counsellor-login.component';
import { CounsellorRegistrationComponent } from './counsellor-registration/counsellor-registration.component';
import { CounsellorDashboardComponent } from './counsellor-dashboard/counsellor-dashboard.component';
import { CounsellorGroupsComponent } from './counsellor-groups/counsellor-groups.component';
import { CounsellorClientsComponent } from './counsellor-clients/counsellor-clients.component';
import { GroupFormComponent } from './group-form/group-form.component';
import { SpecificCounsellorComponent } from './specific-counsellor/specific-counsellor.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FooterComponent } from './footer/footer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    ClientDashboardComponent,
    CounsellorOptionsComponent,
    ClientGroupsComponent,
    CounsellorLoginComponent,
    CounsellorRegistrationComponent,
    CounsellorDashboardComponent,
    CounsellorGroupsComponent,
    CounsellorClientsComponent,
    GroupFormComponent,
    SpecificCounsellorComponent,
    AboutComponent,
    ContactUsComponent,
    FooterComponent,
    HomepageComponent,
    NavbarComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
