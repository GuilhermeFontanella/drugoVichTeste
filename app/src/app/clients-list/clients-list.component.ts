import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.css']
})
export class ClientsListComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {


  }

  actionEvents(event: any) {
    if (event = [{type: 'new'}]) {
      console.log('pessou aqui')
      this.router.navigateByUrl('')
    } else {
      this.router.navigateByUrl(`editar-cliente/idCliente`)
    }
  }


}
