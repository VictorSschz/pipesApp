import { NgModule } from '@angular/core';

// import { MenuModule } from 'primeng/menu';

import { MenubarModule } from 'primeng/menubar';
import { PanelModule } from 'primeng/panel'
import { CardModule } from 'primeng/card'
import { ButtonModule } from 'primeng/button'
import { FieldsetModule } from 'primeng/fieldset'


@NgModule({
  exports:[
    // MenuModule,
    MenubarModule,
    PanelModule,
    CardModule,
    ButtonModule,
    FieldsetModule
  ]
})
export class PrimeNgModule { }
