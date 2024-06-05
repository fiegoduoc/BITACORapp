import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BlocknotasPage } from './blocknotas.page';

describe('BlocknotasPage', () => {
  let component: BlocknotasPage;
  let fixture: ComponentFixture<BlocknotasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BlocknotasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
