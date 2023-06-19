import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { NgImageSliderModule } from 'ng-image-slider';

import { InicioComponent } from './Components/Inicio/inicio/inicio.component';
import { CarruselComponent } from './Components/Inicio/carrusel/carrusel.component';
import { ServiciosComponent } from './Components/Servicios/servicios/servicios.component';
import { UsuariosComponent } from './Components/Usuarios/usuarios/usuarios.component';
import { InventarioComponent } from './Components/Inventario/inventario/inventario.component';
import { ImportarAhoraComponent } from './Components/ImportarA/importar-ahora/importar-ahora.component';
import { MisImportacionesComponent } from './Components/Misimports/mis-importaciones/mis-importaciones.component';
import { AcercadeComponent } from './Components/Acerda/acercade/acercade.component';
import { LoginComponent } from './Components/Login/login/login.component';
import { NavbarComponent } from './Components/Inicio/navbar/navbar.component';
import { ProductosMayoreoComponent } from './Components/ProductosM/productos-mayoreo/productos-mayoreo.component';
import { PiedeComponent } from './Components/Inicio/piede/piede.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    CarruselComponent,
    ServiciosComponent,
    UsuariosComponent,
    InventarioComponent,
    ImportarAhoraComponent,
    MisImportacionesComponent,
    AcercadeComponent,
    LoginComponent,
    NavbarComponent,
    ProductosMayoreoComponent,
    PiedeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule//NgImageSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
