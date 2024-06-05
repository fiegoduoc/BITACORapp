import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NotasvozPage } from './notasvoz.page';

describe('NotasvozPage', () => {
  let component: NotasvozPage;
  let fixture: ComponentFixture<NotasvozPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NotasvozPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
