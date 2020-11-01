import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariosCriacaoComponent } from './usuarioscriacao.component';

describe('ViagensCriacaoComponent', () => {
  let component: UsuariosCriacaoComponent;
  let fixture: ComponentFixture<UsuariosCriacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuariosCriacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuariosCriacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
