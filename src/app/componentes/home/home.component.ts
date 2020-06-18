import { Component, OnInit } from '@angular/core';


// FIRESTORE
import {AngularFirestore} from "@angular/fire/firestore";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  nombreUsuario;
  nombreCorreoBD = localStorage.getItem('correo');

    // Lista de usuarios que se registran
    listaUsuarios = [];

  constructor(private firestore : AngularFirestore) { }

  ngOnInit(): void {
    this.buscarNombre();
  }


  buscarNombre(){

    this.firestore.collection('usuarios').get().subscribe((querySnapShot) => {
      querySnapShot.forEach((doc) => {

        // Correo de la BD == Correo de la lista.
       if(doc.data().correo == this.nombreCorreoBD)
       {
        this.nombreUsuario = doc.data().nombre;
       }

      })
    })
    
  }


}
