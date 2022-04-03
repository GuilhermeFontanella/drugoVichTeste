import { NewEditClienteService } from './new-edit-cliente.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from '../models/Client.model';

@Component({
  selector: 'app-new-edit-client',
  templateUrl: './new-edit-client.component.html',
  styleUrls: ['./new-edit-client.component.css']
})
export class NewEditClientComponent implements OnInit {
  status = [
    { label: 'Ativo' },
    { label: 'Inativo' }
  ]
  newClient: boolean = false;

  selectedStatus: string = '';
  form!: FormGroup;
  showHtml: boolean = false;
  clientId!: any;
  selectedClient!: Client;
  buttonDisabled: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private newEditClientService: NewEditClienteService,
  ) { }

  ngOnInit(): void {
    this.verifyRoute();
  }

  createForm(client?: Client): void {
    this.form = this.formBuilder.group({
      name: [client?.name, [Validators.required]],
      cnpj: [client?.cnpj, [Validators.required]],
      status: [client?.status, [Validators.required]]
    })
    this.form.valueChanges.subscribe((resp) => {
      if (this.form.valid) {
        this.buttonDisabled = false

      }
    })
    this.showHtml = true;
  }

  verifyRoute(): boolean {
    const navigatedRoute = this.route.snapshot.url.toString();
    this.clientId = this.route.snapshot.paramMap.get('id')
    if (navigatedRoute === 'new') {
      this.createForm();
      return this.newClient = true;
    } else {
      this.returnSelectedClient(this.clientId);
      return this.newClient = false;
    }
  }

  submit() {
    const client = this.form.value;
    if (this.clientId) {
      this.newEditClientService.updateClient(this.clientId, client).subscribe(() => {
        window.alert("Cliente alterado com sucesso!");
        setTimeout(() => {
          this.goBack();
        }, 2000);
      }, (error) => {
        window.alert("Ops, um erro aconteceu!");
        setTimeout(() => {
          this.goBack();
        }, 2000);
      })
    } else if (!this.clientId) {
      this.newEditClientService.signUpNewClient(client).subscribe(() => {
        window.alert('Cliente Cadastrado com sucesso!');
        setTimeout(() => {
          this.goBack();
        }, 2000);
      }, (error) => {
        window.alert("Ops, um erro aconteceu!");
        setTimeout(() => {
          this.goBack();
        }, 2000);
      })
    }
  }

  goBack() {
    this.router.navigateByUrl('clients-list');
  }

  returnSelectedClient(idClient: number) {
    this.newEditClientService.getOneClient(idClient).subscribe((resp: any) => {
      this.selectedClient = resp;
      this.createForm(this.selectedClient);
    })
  }
}
