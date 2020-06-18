import { Component, OnInit } from '@angular/core';


// IMPORTO SERVICIO DE BASE DE DATOS
import { DatabaseService } from "../../servicios/database.service";


// IMPORTO EL SERVICIO AUTH
import { AuthService } from "../../servicios/auth.service";


// IMPORTO FORMBUILDER -- PARA VALIDAR.
import { Validators, FormBuilder, FormGroup } from '@angular/forms';


// IMPORTO FIREBASE
import * as firebase from 'firebase/app';


import {AngularFirestore} from "@angular/fire/firestore";

// IMPORTO FIREBASE STORAGE
import {AngularFireStorage} from "@angular/fire/storage"


// ROUTER
import { Router } from '@angular/router';


@Component({
  selector: 'app-alta-productos',
  templateUrl: './alta-productos.component.html',
  styleUrls: ['./alta-productos.component.scss']
})
export class AltaProductosComponent implements OnInit {


  // nombre, marca, stock, tipo, local y precio (validar los datos).

  miFormulario : FormGroup;

  productosJSON = {
    nombre : "",
    marca: "",
    stock: "",
    tipo: "",
    local: "",
    precio: "",
  };


  constructor(
    private router : Router,
    private firestore : AngularFirestore,
    private bd : DatabaseService,
    private auth : AuthService,
    private formBuilder: FormBuilder,
    private st : AngularFireStorage) {
      this.miFormulario = this.formBuilder.group({
        nombre: ['', [Validators.required, Validators.pattern('^[a-zA-Z]{3,20}$')]],
        marca: ['', [Validators.required, Validators.pattern('^[a-zA-Z]{3,20}$')]],
        stock: ['', [Validators.required, Validators.pattern('^[0-9]{1,2}$')]],
        tipo: ['', [Validators.required, Validators.pattern('^[a-zA-Z]{3,20}$')]],
        local: ['', [Validators.required, Validators.pattern('^[a-zA-Z]{3,20}$')]],
        precio: ['', [Validators.required, Validators.pattern('^[0-9]{1,2}$')]],
     });
   }

  ngOnInit(): void {
  }



  registrarProductoBD()
  {
    console.log(this.productosJSON);



    this.firestore.collection('locales').get().subscribe((querySnapShot) => {
      querySnapShot.forEach((doc) => {

        // Correo de la BD == Correo de la lista.
       if(doc.data().nombre == this.productosJSON.local)
       {
         alert("El local existe. El producto se creó con éxito.")
        this.bd.crear('productos',this.productosJSON);
        this.router.navigate(['/home']);
       }

       else
       {
        alert("El local NO existe")
       }


      })
    })





    
  }
}
