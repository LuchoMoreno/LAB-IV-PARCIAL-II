import { Component, OnInit } from '@angular/core';

// IMPORTO EL SERVICIO.
import { AuthService } from "../../servicios/auth.service";

// IMPORTO EL ROUTER COMO ULTIMO PASO.
import { Router } from "@angular/router";

// FIRESTORE
import {AngularFirestore} from "@angular/fire/firestore";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  email : string;
  password : string;

    // Lista de usuarios que se registran
    listaUsuarios = [];

  constructor(private authService : AuthService,
    private firestore : AngularFirestore,
    private router : Router) { }

  ngOnInit(): void {}


  onSubmitLogin()
  {

  this.authService.login(this.email, this.password)
  
  .then (res => this.validadoresAlLoguear())
  
  .catch(err => alert("Los datos son incorrectos. No existe tal usuario"));

  }


  validadoresAlLoguear()
  {
    var FirebaseTokenGenerator = require("firebase-token-generator");
    var tokenGenerator = new FirebaseTokenGenerator("OLhzUJ5XBG1SjiaFpnWoXyBGy40GhsikDf3TrmLA");
    var token = tokenGenerator.createToken({uid: "1", some: "arbitrary", data: this.email});
    localStorage.setItem('token', token);
    localStorage.setItem('correo', this.email);
    this.router.navigate(['/home']);
  }
  


  irRegistrarse()
  {
    this.router.navigate(['/altaUsuario']);
  }





}


