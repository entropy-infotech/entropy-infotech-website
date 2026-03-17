import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticsDashboardsComponent } from './analytics-dashboards.component';

describe('AnalyticsDashboardsComponent', () => {
  let component: AnalyticsDashboardsComponent;
  let fixture: ComponentFixture<AnalyticsDashboardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnalyticsDashboardsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnalyticsDashboardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
