import { Client } from './../models/Client.model';
import { ClientListService } from './client-list.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Table } from '../shared/components/table/Table.model';

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.css'],
})
export class ClientsListComponent implements OnInit {

  cols: Table[] = [];
  items!: Client;

  constructor(
    private router: Router,
    private clientsListService: ClientListService,
  ) { }

  ngOnInit(): void {
    this.getAllClients();
    this.populateColuns();
  }

  getAllClients(): void {
    this.clientsListService.getAllClients().subscribe(resp => {
      this.items = resp;
    })
  }

  actionEvents(event: any) {
    if (event === 'new') {
      this.router.navigateByUrl('client/new')
    } else {
      this.router.navigateByUrl(`client/edit/${event.id}`)
    }
  }

  populateColuns() {
    this.cols = [
      { field: 'name', header: 'Nome'},
      { field: 'cnpj', header: 'CNPJ'},
      { field: 'status', header: 'Status'},
      { field: 'Ação', header: '', icon: '', buttonLabel: 'Editar', width:'width: 85px'}
    ];
  }


}
