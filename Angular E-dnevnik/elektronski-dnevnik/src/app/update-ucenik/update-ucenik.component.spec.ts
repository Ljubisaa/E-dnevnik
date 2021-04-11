import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateUcenikComponent } from './update-ucenik.component';

describe('UpdateUcenikComponent', () => {
  let component: UpdateUcenikComponent;
  let fixture: ComponentFixture<UpdateUcenikComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateUcenikComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateUcenikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
