import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EmailComponent } from './email/email.component';
import { SignupComponent } from './signup/signup.component';
import { MembersComponent } from './members/members.component';
import { AuthGuard } from './auth.service';
import { routes } from './app.routes';


// Must export the config
export const firebaseConfig = {
 apiKey: "AIzaSyBerSjRHZrpM39yvEJiTA1VKpf6HOJUQco",
    authDomain: "myauthapp-3f247.firebaseapp.com",
    databaseURL: "https://myauthapp-3f247.firebaseio.com",
    projectId: "myauthapp-3f247",
    storageBucket: "myauthapp-3f247.appspot.com",
    messagingSenderId: "640414309959"
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmailComponent,
    SignupComponent,
    MembersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    routes
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
