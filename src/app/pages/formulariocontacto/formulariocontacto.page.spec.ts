import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormulariocontactoPage } from './formulariocontacto.page';

describe('FormulariocontactoPage', () => {
  let component: FormulariocontactoPage;
  let fixture: ComponentFixture<FormulariocontactoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulariocontactoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
