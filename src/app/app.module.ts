import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { FavoritosComponent } from './componentes/favoritos/favoritos.component';
import { ListadoComponent } from './componentes/listado/listado.component';
import { DetallesComponent } from './componentes/detalles/detalles.component';
import { RegistrosComponent } from './componentes/registros/registros.component';
import { LogoutComponent } from './componentes/logout/logout.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { BienvenidoComponent } from './componentes/bienvenido/bienvenido.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


// ENVIROMENT
import { firebaseConfig } from "../environments/environment";

import {AngularFireModule} from "@angular/fire";

import {AngularFireAuthModule} from "@angular/fire/auth"


// HTTP.
import { HttpClientModule } from "@angular/common/http";

// SERVICIOS PROPIO.
import { HttpService } from "../app/servicios/http.service";



// NAVBAR PARA VER EL MENU ARRIBA
import {MatMenuModule} from '@angular/material/menu';

// TOOLBAR
import {MatToolbarModule} from '@angular/material/toolbar';

// ANGULAR GRID
import {MatGridListModule} from '@angular/material/grid-list';

// TABLAS
import {MatTableModule} from '@angular/material/table';

// INPUTS
import {MatInputModule} from '@angular/material/input';

// BUTTON
import {MatButtonModule} from '@angular/material/button';

// FORMS (LOS CUADRADITOS DE LOGIN)
import {MatFormFieldModule} from '@angular/material/form-field';

// CARDS BLANQUITAS
import {MatCardModule} from '@angular/material/card';


// NG DIRECTIVA:
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AltaUsuarioComponent } from './componentes/alta-usuario/alta-usuario.component';
import { HomeComponent } from './componentes/home/home.component';
import { AltaLocalesComponent } from './componentes/alta-locales/alta-locales.component';
import { AltaProductosComponent } from './componentes/alta-productos/alta-productos.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FavoritosComponent,
    ListadoComponent,
    DetallesComponent,
    RegistrosComponent,
    LogoutComponent,
    MenuComponent,
    BienvenidoComponent,
    AltaUsuarioComponent,
    HomeComponent,
    AltaLocalesComponent,
    AltaProductosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

    AngularFireModule.initializeApp(firebaseConfig), AngularFireAuthModule,
    
    MatMenuModule,
    MatToolbarModule,
    MatGridListModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,

    
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
