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

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CatalogosProvider } from '../providers/catalogos/catalogos';

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
    DetalleCuentaProductosAgregarPage
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
    DetalleCuentaProductosAgregarPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CatalogosProvider
    
  ]
})
export class AppModule {}
