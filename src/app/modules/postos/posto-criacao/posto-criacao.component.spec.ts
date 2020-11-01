import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostoCriacaoComponent } from './posto-criacao.component';

describe('PostoCriacaoComponent', () => {
  let component: PostoCriacaoComponent;
  let fixture: ComponentFixture<PostoCriacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostoCriacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostoCriacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
