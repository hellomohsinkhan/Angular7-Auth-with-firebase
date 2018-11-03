import { Component, OnInit, HostBinding } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { Router } from '@angular/router';
import { moveIn } from '../router.animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [moveIn()],
  host: {'[@moveIn]': ''}
})
export class LoginComponent implements OnInit {
  
  state: string = '';
  error: any;
  constructor(public af: AngularFire,private router: Router) {

      this.af.auth.subscribe(auth => { 
      if(auth) {
        this.router.navigateByUrl('/members');
      }
    });

  }

  loginFb() {
    this.af.auth.login({
      provider: AuthProviders.Facebook,
      method: AuthMethods.Popup,
    }).then(
        (success) => {
        this.router.navigate(['/members']);
      }).catch(
        (err) => {
        this.error = err;
      })
  }

  loginGoogle() {
    this.af.auth.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Popup,
    }).then(
        (success) => {
        this.router.navigate(['/members']);
      }).catch(
        (err) => {
        this.error = err;
      })
  }
  loginLinkedIn(){
     IN.User.authorize(function(){
        });
      IN.Event.on(IN, "auth", function(data){         
          IN.API.Raw("/people/~").result(function(data){
          console.log(data);
          console.log(data.id);
          this.af.auth.createUser({
            email: 'test1@gmail.com',
            password: '123456789'
          }).then(
            (success) => {
            this.router.navigate(['/members'])
          }).catch(
            (err) => {
            this.error = err;
          })
      });
      });
  }
  onLinkedInLoad() {
      IN.Event.on(IN, "auth", function(data){
          console.log("fdsgds");
          IN.API.Raw("/people/~").result(function(data){
          console.log(data);
          console.log(data.id);
      });
      console.log("gfdgd");
      });
      this.af.auth.createUser({
        email: "tested111@gmail.com",
        password: "123456789"
      }).then(
        (success) => {
        this.router.navigate(['/members'])
      }).catch(
        (err) => {
        this.error = err;
      })
  }
  /*getProfileData() {
       IN.API.Raw("/people/~:").result(onSuccess).error(onError);
  }
  onError(error) {
      console.log(error);
  }
  onSuccess(data) {
      console.log(data);
  }*/


  ngOnInit() {
  
  }

}
