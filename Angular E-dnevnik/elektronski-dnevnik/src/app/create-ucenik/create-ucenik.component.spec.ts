import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUcenikComponent } from './create-ucenik.component';

describe('CreateUcenikComponent', () => {
  let component: CreateUcenikComponent;
  let fixture: ComponentFixture<CreateUcenikComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateUcenikComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateUcenikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
