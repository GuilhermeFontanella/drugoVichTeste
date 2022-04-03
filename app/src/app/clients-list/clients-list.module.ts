import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsListComponent } from './clients-list.component';
import { ClientsListRoutingModule } from './clients-list-routing.module';
import { HeaderMenuModule } from '../shared/components/header-menu/header-menu.module';
import { DynamicTableModule } from '../shared/components/table/dynamic-table.module';



@NgModule({
  declarations: [ ClientsListComponent ],
  exports: [ ClientsListComponent ],
  imports: [
    CommonModule,
    ClientsListRoutingModule,
    HeaderMenuModule,
    DynamicTableModule,
  ]
})
export class ClientsListModule { }
