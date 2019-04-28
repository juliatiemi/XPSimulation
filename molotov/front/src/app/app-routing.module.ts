import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AskComponent } from './ask/ask.component'
import { LoginComponent } from './login/login.component'
import { ProfileComponent } from './profile/profile.component'
import { QuestionComponent } from './question/question.component'
import { QuestionListComponent } from './question-list/question-list.component'
import { RegisterComponent } from './register/register.component'

const routes: Routes = [
  { path: 'ask', component: AskComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'question', component: QuestionComponent },
  { path: 'questions', component: QuestionListComponent },
  { path: 'register', component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
