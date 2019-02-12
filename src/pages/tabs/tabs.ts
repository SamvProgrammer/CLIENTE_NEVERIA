import { Component } from '@angular/core';
import { TransaccionesPage } from '../transacciones/transacciones';
import { CuentasPage } from '../cuentas/cuentas';
import { CatalogosPage } from '../catalogos/catalogos';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  
  tab2Root = CuentasPage;
  tab3Root = TransaccionesPage;

  constructor() {

  }
}
