import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UcenikGridComponent } from './ucenik-grid.component';

describe('UcenikGridComponent', () => {
  let component: UcenikGridComponent;
  let fixture: ComponentFixture<UcenikGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UcenikGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UcenikGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
