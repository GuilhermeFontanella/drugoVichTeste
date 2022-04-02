import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEditClientComponent } from './new-edit-client.component';

describe('NewClientComponent', () => {
  let component: NewEditClientComponent;
  let fixture: ComponentFixture<NewEditClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewEditClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewEditClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
