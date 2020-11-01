import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViagensListComponent } from './viagens-list.component';

describe('ViagensListComponent', () => {
  let component: ViagensListComponent;
  let fixture: ComponentFixture<ViagensListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViagensListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViagensListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
