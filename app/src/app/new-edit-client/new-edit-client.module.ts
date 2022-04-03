import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewEditClientComponent } from './new-edit-client.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { NewEditClientRoutingModule } from './clients-list-routing.module';
import { InputTextModule } from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    NewEditClientComponent
  ],
  exports: [ NewEditClientComponent ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CardModule,
    ButtonModule,
    DropdownModule,
    NewEditClientRoutingModule,
    InputTextModule,
    InputMaskModule,
    MatSnackBarModule
  ]
})
export class NewEditClientModule { }
