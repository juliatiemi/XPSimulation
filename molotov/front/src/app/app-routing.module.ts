import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AskComponent } from './ask/ask.component'
import { LoginComponent } from './login/login.component'
import { ProfileComponent } from './profile/profile.component'
import { QuestionComponent } from './question/question.component'
import { QuestionListComponent } from './question-list/question-list.component'
import { RegisterComponent } from './register/register.component'
import { DescEditComponent } from './desc-edit/desc-edit.component'
import { PassChangeComponent } from './pass-change/pass-change.component'

const routes: Routes = [
  { path: 'ask', component: AskComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'question', component: QuestionComponent },
  { path: 'questions', component: QuestionListComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'desc', component: DescEditComponent },
  { path: 'pass', component: PassChangeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
