import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


// ESTO ES PORQUE INSTALÉ:    import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
//                             npm install firebase @angular/fire --save
@Component({
  selector: 'app-bienvenido',
  templateUrl: './bienvenido.component.html',
  styleUrls: ['./bienvenido.component.scss']
})
export class BienvenidoComponent implements OnInit {

  constructor(private Router : Router) { }

  ngOnInit(): void {
  }

}
