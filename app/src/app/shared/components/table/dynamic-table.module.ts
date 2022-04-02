import { ButtonModule } from 'primeng/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableModule } from 'primeng/table';
import { DynamicTableComponent } from './dynamic-table.component';
import { TooltipModule } from 'primeng/tooltip';



@NgModule({
  declarations: [ DynamicTableComponent ],
  exports: [ DynamicTableComponent ],
  imports: [
    CommonModule,
    TableModule,
    ButtonModule,
    TooltipModule
  ]
})
export class DynamicTableModule { }
