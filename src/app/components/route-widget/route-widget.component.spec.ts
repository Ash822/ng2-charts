import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteWidgetComponent } from './route-widget.component';

describe('RouteWidgetComponent', () => {
  let component: RouteWidgetComponent;
  let fixture: ComponentFixture<RouteWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
