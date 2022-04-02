import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'clients-list',
    pathMatch: 'full'
  },
  {
    path: 'clients-list',
    loadChildren: () => import('../app/clients-list/clients-list.module').then((m) => m.ClientsListModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
