import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AuthenticationService } from './services/auth/authentication.service';
import { SignupComponent } from './signup/signup.component';
import { CreatedbyComponent } from './createdby/createdby.component';
import { AssignedtoComponent } from './assignedto/assignedto.component';
import { CreatetaskComponent } from './createtask/createtask.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    CreatedbyComponent,
    AssignedtoComponent,
    CreatetaskComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
