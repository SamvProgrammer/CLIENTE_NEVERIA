import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { Vibration } from '@ionic-native/vibration/ngx';
import { SMS } from '@ionic-native/sms/ngx';
import { CurrencyPipe } from '@angular/common';


import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { CatalogosPage } from '../pages/catalogos/catalogos';
import { TransaccionesPage } from '../pages/transacciones/transacciones';
import { CuentasPage } from '../pages/cuentas/cuentas';
import { CrearproductosPage } from '../pages/crearproductos/crearproductos';
import { DetalleCuentaPage } from '../pages/detalle-cuenta/detalle-cuenta';
import { UsuariosPage } from '../pages/usuarios/usuarios';
import { SucursalesPage } from '../pages/sucursales/sucursales';
import { HistorialPage } from '../pages/historial/historial';
import { VercuentaPage } from '../pages/vercuenta/vercuenta';
import { TicketPage } from '../pages/ticket/ticket';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CatalogosProvider } from '../providers/catalogos/catalogos';
import { PrdverificaentrarProvider } from '../providers/prdverificaentrar/prdverificaentrar';
import { TicketsProvider } from '../providers/tickets/tickets';

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
    UsuariosPage,
    SucursalesPage,
    HistorialPage,
    VercuentaPage,
    TicketPage
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
    UsuariosPage,
    SucursalesPage,
    HistorialPage,
    VercuentaPage,
    TicketPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CatalogosProvider,
    PrdverificaentrarProvider,
    TicketsProvider,
    SMS,
    Vibration,
    GooglePlus,
    CurrencyPipe,
  ]
})
export class AppModule {}
