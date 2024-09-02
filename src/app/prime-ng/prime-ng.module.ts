import { NgModule } from '@angular/core';

// import { MenuModule } from 'primeng/menu';

import { MenubarModule } from 'primeng/menubar';
import { PanelModule } from 'primeng/panel'
import { CardModule } from 'primeng/card'
import { ButtonModule } from 'primeng/button'
import { FieldsetModule } from 'primeng/fieldset'
import { ToolbarModule } from 'primeng/toolbar';
import { TableModule } from 'primeng/table';


@NgModule({
  exports:[
    // MenuModule,
    MenubarModule,
    PanelModule,
    CardModule,
    ButtonModule,
    FieldsetModule,
    ToolbarModule,
    TableModule
  ]
})
export class PrimeNgModule { }
