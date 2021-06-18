import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuntieComponent } from './auntie.component';

describe('AuntieComponent', () => {
  let component: AuntieComponent;
  let fixture: ComponentFixture<AuntieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuntieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuntieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
