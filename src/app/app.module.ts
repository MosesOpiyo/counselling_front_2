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
import { SpecificGroupComponent } from './specific-group/specific-group.component';
import { GroupchatComponent } from './groupchat/groupchat.component';
import { MessagesComponent } from './messages/messages.component';
import { ClientMessageComponent } from './client-message/client-message.component';
import { HomeHelpSearchComponent } from './home-help-search/home-help-search.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FooterComponent } from './footer/footer.component';
import { AboutUsComponent } from './about-us/about-us.component';

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
    SpecificGroupComponent,
    GroupchatComponent,
    MessagesComponent,
    ClientMessageComponent,
    HomeHelpSearchComponent,
    AppointmentComponent,
    NavbarComponent,
    HomepageComponent,
    FooterComponent,
    AboutUsComponent
  
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
