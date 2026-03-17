import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentPlaygroundComponent } from './student-playground.component';

describe('StudentPlaygroundComponent', () => {
  let component: StudentPlaygroundComponent;
  let fixture: ComponentFixture<StudentPlaygroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentPlaygroundComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentPlaygroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
