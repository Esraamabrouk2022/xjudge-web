import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangePasswordComponent } from './Components/change-password/change-password.component';
import { ContestComponent } from './Components/contest/contest.component';
import { ForgetPasswordComponent } from './Components/forget-password/forget-password.component';
import { GroupComponent } from './Components/group/group.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { PaginationComponent } from './Components/pagination/pagination.component';
import { ProblemComponent } from './Components/problem/problem.component';
import { RegisterComponent } from './Components/register/register.component';
import { ResetPasswordComponent } from './Components/reset-password/reset-password.component';
import { ProtectedAuthGuard } from './Guards/auth.guard';
import { ProblemDetailsComponent } from './Components/problem-details/problem-details.component';
import { SubmitProblemComponent } from './Components/submit-problem/submit-problem.component';
import { CreateGroupComponent } from './Components/create-group/create-group.component';
import { MyGroupsComponent } from './Components/my-groups/my-groups.component';
import { ExploreGroupsComponent } from './Components/explore-groups/explore-groups.component';
import { GroupsComponent } from './Components/groups/groups.component';
import { ContestDetailsComponent } from './Components/contest-details/contest-details.component';
import { StatusComponent } from './Components/status/status.component';
import { ProfileComponent } from './Components/profile/profile.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  // {path: 'home',
  // // lazy loading for the component;
  // loadComponent: () =>import('./Components/home/home.component').then((c) => c.HomeComponent),},
  { path: 'home', component:HomeComponent },
  { path: 'problem', canActivate:[ProtectedAuthGuard], component:ProblemComponent },
  { path: 'status', canActivate:[ProtectedAuthGuard], component:StatusComponent},
  { path: 'contest', canActivate:[ProtectedAuthGuard], component:ContestComponent },
  { path: 'contest/:contestId', canActivate:[ProtectedAuthGuard], component:ContestDetailsComponent},
  { path: 'group', canActivate:[ProtectedAuthGuard], component:GroupComponent },
  { path: 'resetPassword', component:ResetPasswordComponent },
  { path: 'forgetPassword', component:ForgetPasswordComponent },
  { path: 'changePassword', canActivate:[ProtectedAuthGuard], component:ChangePasswordComponent },
  { path: 'register', component:RegisterComponent },
  { path: 'login', component:LoginComponent },
  { path: 'submit', component:SubmitProblemComponent },
  { path: 'create-group', component: CreateGroupComponent } ,
  { path: 'allGroups',component: ExploreGroupsComponent},
  { path: 'myGroups',component:MyGroupsComponent},
  { path: 'problem/:source/:problemCode', canActivate:[ProtectedAuthGuard], component:ProblemDetailsComponent },
  { path: 'profile/:handle', component:ProfileComponent }, 
   { path: 'notFound', component:NotFoundComponent },

  { path: '**', component:NotFoundComponent },
  { path: 'groups',component:GroupsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }


