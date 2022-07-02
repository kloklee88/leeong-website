import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RehobethComponent } from './rehobeth.component';

describe('RehobethComponent', () => {
  let component: RehobethComponent;
  let fixture: ComponentFixture<RehobethComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RehobethComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RehobethComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
