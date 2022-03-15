import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ClientComponent } from './components/client/client.component';
import { ProjectComponent } from './components/project/project.component';
import { UserComponent } from './components/user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdateUserComponent } from './components/user/update-user/update-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateClientComponent } from './components/client/update-client/update-client.component';
import { UpdateProjectComponent } from './components/project/update-project/update-project.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ClientComponent,
    ProjectComponent,
    UserComponent,
    UpdateUserComponent,
    UpdateClientComponent,
    UpdateProjectComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,

 
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
