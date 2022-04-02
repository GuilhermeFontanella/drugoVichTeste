import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export interface Car {
  vin: string;
  year: string;
  brand: string;
  color: string;
}

@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.css']
})
export class DynamicTableComponent implements OnInit {
  @Output() selectedItem = new EventEmitter();
  @Output() newClientEvent = new EventEmitter();
  @Input() cols!: any[];
  @Input() cars: Car[] = [];
  @Input() header: string = 'Insira o cabeçalho aqui'

  constructor() { }

  ngOnInit(): void {

    this.cars = [
      {
        vin: 'AMG',
        year: '2011',
        brand: 'Mercedes Benz',
        color: 'White',
      },
      {
        vin: '320i',
        year: '2020',
        brand: 'BMW',
        color: 'Black',
      },
      {
        vin: 'Passat',
        year: '2022',
        brand: 'VW',
        color: 'White',
      },
    ]

    this.cols = [
      { field: 'vin', header: 'Vin'},
      { field: 'year', header: 'Year'},
      { field: 'brand', header: 'Brand'},
      { field: 'color', header: 'Color'},
      { field: 'Ação', header: '', icon: '', buttonLabel: 'Editar', width:'width: 85px', align: 'text-align: center'}
    ];

  }

  select(objeto: any): void {
    return this.selectedItem.emit(objeto);
  }

  newClient(event: MouseEvent): void {
    return this.newClientEvent.emit('new');
  }

}
