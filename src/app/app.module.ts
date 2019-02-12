import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpClientModule } from '@angular/common/http';


import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { CatalogosPage } from '../pages/catalogos/catalogos';
import { TransaccionesPage } from '../pages/transacciones/transacciones';
import { CuentasPage } from '../pages/cuentas/cuentas';
import { CrearproductosPage } from '../pages/crearproductos/crearproductos';
import { DetalleCuentaPage } from '../pages/detalle-cuenta/detalle-cuenta';
import { DetalleCuentaProductosAgregarPage } from '../pages/detalle-cuenta-productos-agregar/detalle-cuenta-productos-agregar';
import { UsuariosPage } from '../pages/usuarios/usuarios';
import { SucursalesPage } from '../pages/sucursales/sucursales';
import { HistorialPage } from '../pages/historial/historial';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CatalogosProvider } from '../providers/catalogos/catalogos';
import { PrdverificaentrarProvider } from '../providers/prdverificaentrar/prdverificaentrar';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    LoginPage,
    CatalogosPage,
    TransaccionesPage,
    CuentasPage,
    CrearproductosPage,
    DetalleCuentaPage,
    DetalleCuentaProductosAgregarPage,
    UsuariosPage,
    SucursalesPage,
    HistorialPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    LoginPage,
    CatalogosPage,
    TransaccionesPage,
    CuentasPage,
    CrearproductosPage,
    DetalleCuentaPage,
    DetalleCuentaProductosAgregarPage,
    UsuariosPage,
    SucursalesPage,
    HistorialPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CatalogosProvider,
    PrdverificaentrarProvider
    
  ]
})
export class AppModule {}
