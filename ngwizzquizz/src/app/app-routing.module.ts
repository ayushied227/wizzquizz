import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './login/login.component';
import { QuizzdetailComponent } from './quizzdetail/quizzdetail.component';
import { QuizzesComponent } from './quizzes/quizzes.component';
import { QuizzlistComponent } from './quizzlist/quizzlist.component';
import { RegisterComponent } from './register/register.component';
import { ResultComponent } from './result/result.component';

const routes: Routes = [
  {
    path: 'auth',
    component: AuthComponent,
    // canActivate: [UnAuthGuardService],
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      }
    ]
  },
  {
    path: 'quizzes',
    component: QuizzesComponent,
    // canActivate: [AuthGuardService],
    children: [
      {
        path: '',
        redirectTo: 'all',
        pathMatch: 'full'
      },
      {
        path: 'all',
        component: QuizzlistComponent
      },
      {
        path: ':slug',
        component: QuizzdetailComponent
      },
      {
        path: ':slug/result',
        component: ResultComponent
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
