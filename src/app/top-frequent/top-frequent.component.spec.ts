import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopFrequentComponent } from './top-frequent.component';

describe('TopFrequentComponent', () => {
  let component: TopFrequentComponent;
  let fixture: ComponentFixture<TopFrequentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopFrequentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopFrequentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
