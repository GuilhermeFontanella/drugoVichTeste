import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ClientListService } from 'src/app/clients-list/client-list.service';
import { Table } from './Table.model';

@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.css'],
})
export class DynamicTableComponent implements OnInit {
  @Output() selectedItem = new EventEmitter();
  @Output() newClientEvent = new EventEmitter();
  @Input() cols!: Table[];
  @Input() items: any;
  @Input() header: string = 'Insira o cabeçalho aqui'

  constructor() { }

  ngOnInit(): void {
  }

  select(objeto: any): void {
    return this.selectedItem.emit(objeto);
  }

  newClient(event: MouseEvent): void {
    return this.newClientEvent.emit('new');
  }

}
