import { Component, OnInit } from '@angular/core';


// IMPORTO SERVICIO DE BASE DE DATOS
import { DatabaseService } from "../../servicios/database.service";


// IMPORTO EL SERVICIO AUTH
import { AuthService } from "../../servicios/auth.service";


// IMPORTO FORMBUILDER -- PARA VALIDAR.
import { Validators, FormBuilder, FormGroup } from '@angular/forms';


// IMPORTO FIREBASE
import * as firebase from 'firebase/app';


// IMPORTO FIREBASE STORAGE
import {AngularFireStorage} from "@angular/fire/storage"


// ROUTER
import { Router } from '@angular/router';

@Component({
  selector: 'app-alta-usuario',
  templateUrl: './alta-usuario.component.html',
  styleUrls: ['./alta-usuario.component.scss']
})
export class AltaUsuarioComponent implements OnInit {


  miFormulario : FormGroup;

  usuarioJSON = {
    nombre : "",
    correo: "",
    password: "",
  };

  constructor(
    private router : Router,
    private bd : DatabaseService,
    private auth : AuthService,
    private formBuilder: FormBuilder,
    private st : AngularFireStorage) {
      this.miFormulario = this.formBuilder.group({
        nombre: ['', [Validators.required, Validators.pattern('^[a-zA-Z]{3,20}$')]],
        password: ['', [Validators.pattern('^[a-z0-9_-]{6,18}$')]],
        correo: ['', [Validators.required, Validators.email] ],
     });
   }

  ngOnInit(): void {
  }


  registrarUsuarioBD()
  {
    console.log(this.usuarioJSON);
    this.bd.crear('usuarios',this.usuarioJSON);

    this.auth.register(this.usuarioJSON.correo,this.usuarioJSON.password)  
    
    .then (res => this.router.navigate(['/login']))

    .catch(err => alert("INCORRECTO"));
    
  }

}
