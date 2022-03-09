import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './components/client/client.component';
import { LoginComponent } from './components/login/login.component';
import { ProjectComponent } from './components/project/project.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
<<<<<<< HEAD
  { path: 'login', component:LoginComponent},
=======
  { path: 'login', component: LoginComponent },
>>>>>>> 2d7c85affc53a932d483a139393ee0533040abb8
  { path: 'client', component: ClientComponent },
  { path: 'user', component: UserComponent },
  { path: 'project', component: ProjectComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
