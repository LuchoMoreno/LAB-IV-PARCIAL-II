import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { DetallesComponent } from './componentes/detalles/detalles.component';
import { RegistrosComponent } from './componentes/registros/registros.component';
import { LogoutComponent } from './componentes/logout/logout.component';
import { FavoritosComponent } from './componentes/favoritos/favoritos.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { ListadoComponent } from './componentes/listado/listado.component';
import { BienvenidoComponent } from './componentes/bienvenido/bienvenido.component';


// GUARD.
import { GuardLoginGuard } from './guards/guard-login.guard';
import { AltaUsuarioComponent } from './componentes/alta-usuario/alta-usuario.component';
import { HomeComponent } from './componentes/home/home.component';
import { AltaLocalesComponent } from './componentes/alta-locales/alta-locales.component';
import { AltaProductosComponent } from './componentes/alta-productos/alta-productos.component';

const routes: Routes = [ //constante routes del tipo routes

  {
    path: 'bienvenido', 
    component: BienvenidoComponent,
  },

  {
    path: 'home', 
    component: HomeComponent,
    canActivate: [GuardLoginGuard],
  },

  {
    path: 'altaUsuario', 
    component: AltaUsuarioComponent,
  },

  {
    path: 'altaLocal', 
    component: AltaLocalesComponent,
    canActivate: [GuardLoginGuard],
  },

  {
    path: 'altaProductos', 
    component: AltaProductosComponent,
    canActivate: [GuardLoginGuard],
  },

  { path: '', pathMatch: 'full', redirectTo: 'bienvenido'},

  {
    path: 'login', 
    component: LoginComponent,
  },


  {
    path: 'listado', 
    component: ListadoComponent,
    canActivate: [GuardLoginGuard],
  },


  {
    path: 'favoritos', component: FavoritosComponent 
  },
 
  {
    path: 'registro', component: RegistrosComponent
  },


  {
    path: 'menu', 
    component: MenuComponent,
  },


  {
    path: 'logout', component: LogoutComponent
  }

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
