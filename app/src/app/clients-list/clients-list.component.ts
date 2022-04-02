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
    console.log(event);

    if (event === 'new') {
      this.router.navigateByUrl('client/new')
    } else {
      this.router.navigateByUrl('client/edit/idClient')
    }
  }


}
