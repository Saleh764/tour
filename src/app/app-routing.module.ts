import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { loginGuard } from './core/guards/login.guard';
import { authGuard } from './core/guards/auth.guard';
import { PersonComponent } from './components/person/person.component';
import { TranslateComponent } from './components/translate/translate.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },{
  path: 'dashboard',
  component: DashboardComponent,
  canActivate: [authGuard]

},{
  path: 'person',
  component: PersonComponent,
  canActivate: [authGuard]
},{
  path: 'translate',
  component: TranslateComponent,
  canActivate: [authGuard]
},


{
  path: 'login',
  component: LoginComponent,
  canActivate: [loginGuard]
},

];
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
