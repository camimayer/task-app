import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignedtoComponent } from './assignedto.component';

describe('AssignedtoComponent', () => {
  let component: AssignedtoComponent;
  let fixture: ComponentFixture<AssignedtoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AssignedtoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AssignedtoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
