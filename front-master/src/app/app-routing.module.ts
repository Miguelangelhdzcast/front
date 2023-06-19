import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './Components/Inicio/inicio/inicio.component';
import { AcercadeComponent } from './Components/Acerda/acercade/acercade.component';
import { ImportarAhoraComponent } from './Components/ImportarA/importar-ahora/importar-ahora.component';
import { InventarioComponent } from './Components/Inventario/inventario/inventario.component';
import { LoginComponent } from './Components/Login/login/login.component';
import { MisImportacionesComponent } from './Components/Misimports/mis-importaciones/mis-importaciones.component';
import { ProductosMayoreoComponent } from './Components/ProductosM/productos-mayoreo/productos-mayoreo.component';
import { ServiciosComponent } from './Components/Servicios/servicios/servicios.component';
import { UsuariosComponent } from './Components/Usuarios/usuarios/usuarios.component';

const routes: Routes = [
    { path: '', component: InicioComponent},
    { path:'acercade', component:AcercadeComponent},
    { path:'importarahora',component:ImportarAhoraComponent},
    { path:'inventario', component: InventarioComponent},
    { path:'login', component: LoginComponent},
    { path:'misimport',component: MisImportacionesComponent},
    { path:'productosma', component: ProductosMayoreoComponent},
    { path:'servicios', component: ServiciosComponent},
    { path: 'usuarios', component: UsuariosComponent},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
