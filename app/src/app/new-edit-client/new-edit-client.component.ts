import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';

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

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.createForm();
    console.log("iniciou");
  }

  createForm(): void {
    this.form = this.formBuilder.group({
      name: [, [Validators.required]],
      cnpj: [, [Validators.required]],
      status: [this.selectedStatus, [Validators.required]]
    })
    this.showHtml = true;
    this.verifyRoute();
  }

  verifyRoute(): boolean {
    const navigatedRoute = this.route.snapshot.url.toString();
    console.log(navigatedRoute)
    if (navigatedRoute === 'new') {
      return this.newClient = true;
    } else {
      return this.newClient = false;
    }
  }

  submit() {
    console.log(this.form.value)
  }

  goBack() {
    this.router.navigateByUrl('clients-list');
  }


}
