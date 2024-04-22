import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CreatedbyComponent } from './createdby/createdby.component';
import { AssignedtoComponent } from './assignedto/assignedto.component';
import { CreatetaskComponent } from './createtask/createtask.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'createdby', component: CreatedbyComponent },
  { path: 'assignedto', component: AssignedtoComponent },
  { path: 'create', component: CreatetaskComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
