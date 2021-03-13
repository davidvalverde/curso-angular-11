import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaisesReactiveFormComponent } from './paises-reactive-form.component';

describe('PaisesReactiveFormComponent', () => {
  let component: PaisesReactiveFormComponent;
  let fixture: ComponentFixture<PaisesReactiveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaisesReactiveFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaisesReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
