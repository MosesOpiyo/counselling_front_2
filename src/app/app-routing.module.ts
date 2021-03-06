import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ClientDashboardComponent } from './client-dashboard/client-dashboard.component';
import { ClientGroupsComponent } from './client-groups/client-groups.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CounsellorClientsComponent } from './counsellor-clients/counsellor-clients.component';
import { CounsellorDashboardComponent } from './counsellor-dashboard/counsellor-dashboard.component';
import { CounsellorGroupsComponent } from './counsellor-groups/counsellor-groups.component';
import { CounsellorLoginComponent } from './counsellor-login/counsellor-login.component';
import { CounsellorOptionsComponent } from './counsellor-options/counsellor-options.component';
import { CounsellorRegistrationComponent } from './counsellor-registration/counsellor-registration.component';
import { FooterComponent } from './footer/footer.component';
import { GroupFormComponent } from './group-form/group-form.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SignupComponent } from './signup/signup.component';
import { SpecificCounsellorComponent } from './specific-counsellor/specific-counsellor.component';

const routes: Routes = [
  {path:'',component:HomepageComponent},
  {path:'sign-up',component:SignupComponent},
  {path:'login',component:LoginComponent},
  {path:'client_dashboard',component:ClientDashboardComponent},
  {path:'counsellor_options',component:CounsellorOptionsComponent},
  {path:'client_groups',component:ClientGroupsComponent},
  {path:'counsellor_registration',component:CounsellorRegistrationComponent},
  {path:'counsellor_login',component:CounsellorLoginComponent},
  {path:'counsellor_dashboard',component:CounsellorDashboardComponent},
  {path:'counsellor_groups',component:CounsellorGroupsComponent},
  {path:'counsellors_client',component:CounsellorClientsComponent},
  {path:'group_form',component:GroupFormComponent},
  {path:'counsellor',component:SpecificCounsellorComponent},
  {path:'contact-us',component:ContactUsComponent},
  {path:'about',component:AboutComponent},
  {path:'footer',component:FooterComponent},
  {path:'navbar',component:NavbarComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
