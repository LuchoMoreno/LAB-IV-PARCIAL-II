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
  
  .then (res => this.router.navigate(['/home']))
  
  .catch(err => alert("Los datos son incorrectos. No existe tal usuario"));

  }




  irRegistrarse()
  {
    this.router.navigate(['/altaUsuario']);
  }





}


