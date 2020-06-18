import { Component, OnInit } from '@angular/core';


// IMPORTO EL SERVICIO.
import { AuthService } from "../../servicios/auth.service";

// IMPORTO EL ROUTER COMO ULTIMO PASO.
import { Router } from "@angular/router";


@Component({
  selector: 'app-registros',
  templateUrl: './registros.component.html',
  styleUrls: ['./registros.component.scss']
})
export class RegistrosComponent implements OnInit {


  email : string;
  password : string;

  constructor(private AuthService : AuthService,
    private Router : Router) { }

  ngOnInit(): void {
  }


  onSubmitRegister()
  {
  this.AuthService.register(this.email, this.password)
  
  .then (res => this.Router.navigate(['/login']))
  
  .catch(err => alert("INCORRECTO"));
  
  }


}
