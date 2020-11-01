import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostoListComponent } from './posto-list.component';

describe('PostoListComponent', () => {
  let component: PostoListComponent;
  let fixture: ComponentFixture<PostoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
