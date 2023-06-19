import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisImportacionesComponent } from './mis-importaciones.component';

describe('MisImportacionesComponent', () => {
  let component: MisImportacionesComponent;
  let fixture: ComponentFixture<MisImportacionesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MisImportacionesComponent]
    });
    fixture = TestBed.createComponent(MisImportacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
