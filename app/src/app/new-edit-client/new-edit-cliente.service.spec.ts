import { TestBed } from '@angular/core/testing';

import { NewEditClienteService } from './new-edit-cliente.service';

describe('NewEditClienteService', () => {
  let service: NewEditClienteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewEditClienteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
