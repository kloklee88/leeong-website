import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeepcreekComponent } from './deepcreek.component';

describe('DeepcreekComponent', () => {
  let component: DeepcreekComponent;
  let fixture: ComponentFixture<DeepcreekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeepcreekComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeepcreekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
