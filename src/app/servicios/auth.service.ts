import { Injectable, ComponentFactoryResolver } from '@angular/core';

import { AngularFireAuth } from "@angular/fire/auth";

// COSAS DEL TOKEN GENERATOR $ npm install firebase-token-generator --save



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private AFauth : AngularFireAuth) { }


  login(email : string, password : string){

    return new Promise((resolve, rejected) => {
  
    this.AFauth.signInWithEmailAndPassword(email, password)
    
    .then (user => resolve(user))
    
    .catch(err => rejected(err))
    })



    


    ;

    
}


register(email : string, password : string){

  return new Promise((resolve, rejected) => {

  this.AFauth.createUserWithEmailAndPassword(email, password)
  
  .then (user => resolve(user))
  
  .catch(err => rejected(err))

  });

}

}