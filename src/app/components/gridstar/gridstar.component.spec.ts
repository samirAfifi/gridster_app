import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridstarComponent } from './gridstar.component';

describe('GridstarComponent', () => {
  let component: GridstarComponent;
  let fixture: ComponentFixture<GridstarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridstarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridstarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
