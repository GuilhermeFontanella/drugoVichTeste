import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewEditClientComponent } from './new-edit-client.component';

const routes: Routes = [
  {
    path: 'new', component: NewEditClientComponent
  },
  {
    path: 'edit/:id', component: NewEditClientComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewEditClientRoutingModule { }
