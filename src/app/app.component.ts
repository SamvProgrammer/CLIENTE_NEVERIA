import { Component } from '@angular/core';
import { Platform ,MenuController, Tabs} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PrdverificaentrarProvider } from '../providers/prdverificaentrar/prdverificaentrar';

import { LoginPage } from '../pages/login/login';
import { TabsPage } from '../pages/tabs/tabs';
import { CatalogosPage } from '../pages/catalogos/catalogos';
import { UsuariosPage } from '../pages/usuarios/usuarios';
import { SucursalesPage } from '../pages/sucursales/sucursales';
import { HistorialPage } from '../pages/historial/historial';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LoginPage;
  rootPage2:any = TabsPage;
  producto:any = CatalogosPage;
  usuarios:any=UsuariosPage;
  sucursales:any = SucursalesPage;
  historial:any = HistorialPage;
  tabs:any = TabsPage;
  
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,private prdVerificaEntrar:PrdverificaentrarProvider,
  private menuCtrl:MenuController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  public verificaEntrar(): boolean {
    return this.prdVerificaEntrar.getEntrar();
  }

  public verificaRol(): boolean {
    return this.prdVerificaEntrar.getActivaMenu();
  }

  public openPage(pagina) {
    this.menuCtrl.close();
    this.rootPage2 = pagina;
  }
}
