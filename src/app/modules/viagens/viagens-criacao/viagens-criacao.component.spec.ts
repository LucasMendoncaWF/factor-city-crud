import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViagensCriacaoComponent } from './viagens-criacao.component';

describe('ViagensCriacaoComponent', () => {
  let component: ViagensCriacaoComponent;
  let fixture: ComponentFixture<ViagensCriacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViagensCriacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViagensCriacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
