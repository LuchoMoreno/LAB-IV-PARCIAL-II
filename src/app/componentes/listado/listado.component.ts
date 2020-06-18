import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// IMPORTO EL SERVICIO.
import {HttpService} from '../../servicios/http.service'

// GRIS
import {MatGridListModule} from '@angular/material/grid-list';

// TABLAS
import {MatTableModule} from '@angular/material/table';

// FIRESTORE
import {AngularFirestore} from "@angular/fire/firestore";

// IMPORTAR TODO.




@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {

  // Lista de productos que se registran
  listaProductos = [];


  listado : any[]=[];
  persona : any;

  verDetalleFlag= false;

  displayedColumns: string[] = ['name', 'img'];


  constructor(private Router : Router,
  private firestore : AngularFirestore,
  private http : HttpService) { }

  ngOnInit(): void {


    let fb = this.firestore.collection('productos');
              
      
            // Me voy a suscribir a la colección, y si el usuario está "ESPERANDO", se va a guardar en una lista de usuarios.
            fb.valueChanges().subscribe(datos =>{       // <-- MUESTRA CAMBIOS HECHOS EN LA BASE DE DATOS.
              
              this.listaProductos = [];
      
              datos.forEach( (dato:any) =>{
      
                  this.listaProductos.push(dato);      // <--- LISTA DE USUARIOS.
              
              });
      
            })
    }


  

  } 



