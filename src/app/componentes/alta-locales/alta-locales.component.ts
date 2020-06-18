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
  selector: 'app-alta-locales',
  templateUrl: './alta-locales.component.html',
  styleUrls: ['./alta-locales.component.scss']
})
export class AltaLocalesComponent implements OnInit {

  miFormulario : FormGroup;

  localesJSON = {
    nombre : "",
    correo: "",
    telefono: "",
    localidad: "",
  };


  constructor(
    private router : Router,
    private bd : DatabaseService,
    private auth : AuthService,
    private formBuilder: FormBuilder,
    private st : AngularFireStorage) {
      this.miFormulario = this.formBuilder.group({
        nombre: ['', [Validators.required, Validators.pattern('^[a-zA-Z]{3,20}$')]],
        correo: ['', [Validators.required, Validators.email] ],
        telefono: ['', [Validators.required, Validators.pattern('^[0-9]{8}$')]],
        localidad: ['', [Validators.required, Validators.pattern('^[a-zA-Z]{3,20}$')]],
     });
   }

  ngOnInit(): void {
  }


  registrarLocalBD()
  {
    console.log(this.localesJSON);
    this.bd.crear('locales',this.localesJSON);
    this.router.navigate(['/home']);
  }

}
