import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportarAhoraComponent } from './importar-ahora.component';

describe('ImportarAhoraComponent', () => {
  let component: ImportarAhoraComponent;
  let fixture: ComponentFixture<ImportarAhoraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImportarAhoraComponent]
    });
    fixture = TestBed.createComponent(ImportarAhoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
