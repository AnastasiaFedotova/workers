import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkersContainerComponent } from './workers-container.component';

describe('WorkersContainerComponent', () => {
  let component: WorkersContainerComponent;
  let fixture: ComponentFixture<WorkersContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkersContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkersContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
