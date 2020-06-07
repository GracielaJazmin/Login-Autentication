import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//components
import {SigninComponent} from './components/signin/signin.component'
import {SignupComponent} from './components/signup/signup.component'
import {AccountantComponent} from './components/accountant/accountant.component'
import {AuthGuard} from './auth.guard'

const routes: Routes = [
  {
  path:'',
  redirectTo:'/signup',
  pathMatch:'full'
},
  {
    path:'signup',
    component: SignupComponent
  },
  {
    path:'accountant',
    component: AccountantComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'signin',
    component: SigninComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
