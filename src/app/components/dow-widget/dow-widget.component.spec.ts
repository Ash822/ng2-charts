import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DowWidgetComponent } from './dow-widget.component';

describe('DowWidgetComponent', () => {
  let component: DowWidgetComponent;
  let fixture: ComponentFixture<DowWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DowWidgetComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DowWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
