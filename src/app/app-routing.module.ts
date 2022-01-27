import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientDashboardComponent } from './client-dashboard/client-dashboard.component';
import { ClientGroupsComponent } from './client-groups/client-groups.component';
import { CounsellorOptionsComponent } from './counsellor-options/counsellor-options.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:'',component:SignupComponent},
  {path:'login',component:LoginComponent},
  {path:'client_dashboard',component:ClientDashboardComponent},
  {path:'counsellor_options',component:CounsellorOptionsComponent},
  {path:'client_groups',component:ClientGroupsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
