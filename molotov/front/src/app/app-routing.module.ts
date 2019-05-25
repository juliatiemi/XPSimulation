import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { QuestionComponent } from './components/question/question.component';
import { QuestionListComponent } from './components/question-list/question-list.component';
import { AskQuestionComponent } from './components/ask-question/ask-question.component';

const routes: Routes = [
  { path: '', component: QuestionListComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'question/:id', component: QuestionComponent },
  { path: 'questions', component: QuestionListComponent },
  { path: 'ask', component: AskQuestionComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: QuestionListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
