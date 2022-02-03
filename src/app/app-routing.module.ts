import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentComponent } from './appointment/appointment.component';

import { ClientDashboardComponent } from './client-dashboard/client-dashboard.component';
import { ClientGroupsComponent } from './client-groups/client-groups.component';
import { ClientMessageComponent } from './client-message/client-message.component';
import { CounsellorClientsComponent } from './counsellor-clients/counsellor-clients.component';
import { CounsellorDashboardComponent } from './counsellor-dashboard/counsellor-dashboard.component';
import { CounsellorGroupsComponent } from './counsellor-groups/counsellor-groups.component';
import { CounsellorLoginComponent } from './counsellor-login/counsellor-login.component';
import { CounsellorOptionsComponent } from './counsellor-options/counsellor-options.component';
import { CounsellorRegistrationComponent } from './counsellor-registration/counsellor-registration.component';
import { GroupFormComponent } from './group-form/group-form.component';
import { HomeHelpSearchComponent } from './home-help-search/home-help-search.component';
import { LoginComponent } from './login/login.component';
import { MessagesComponent } from './messages/messages.component';
import { SignupComponent } from './signup/signup.component';
import { SpecificCounsellorComponent } from './specific-counsellor/specific-counsellor.component';
import { SpecificGroupComponent } from './specific-group/specific-group.component';

const routes: Routes = [
  {path:'',component:SignupComponent},
  {path:'login',component:LoginComponent},
  {path:'client_dashboard',component:ClientDashboardComponent},
  {path:'home',component:HomeHelpSearchComponent},
  {path:'counsellor_options',component:CounsellorOptionsComponent},
  {path:'client_groups',component:ClientGroupsComponent},
  {path:'counsellor_registration',component:CounsellorRegistrationComponent},
  {path:'counsellor_login',component:CounsellorLoginComponent},
  {path:'counsellor_dashboard',component:CounsellorDashboardComponent},
  {path:'counsellor_groups',component:CounsellorGroupsComponent},
  {path:'counsellors_client',component:CounsellorClientsComponent},
  {path:'group_form',component:GroupFormComponent},
  {path:'counsellor',component:SpecificCounsellorComponent},
  {path:'group',component:SpecificGroupComponent},
  {path:'messages',component:MessagesComponent},
  {path:'client_messages',component:ClientMessageComponent},
  {path:'appointment',component:AppointmentComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
