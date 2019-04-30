import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AskComponent } from './ask/ask.component';
import { QuestionComponent } from './question/question.component';
import { QuestionListComponent } from './question-list/question-list.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from './user.service'
import { HttpClientModule } from '@angular/common/http';
import { DescEditComponent } from './desc-edit/desc-edit.component';
import { PassChangeComponent } from './pass-change/pass-change.component';

@NgModule({
  declarations: [
    AppComponent,
    AskComponent,
    QuestionComponent,
    QuestionListComponent,
    ProfileComponent,
    LoginComponent,
    RegisterComponent,
    DescEditComponent,
    PassChangeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
