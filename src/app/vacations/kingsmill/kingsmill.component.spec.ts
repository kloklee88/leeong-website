import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KingsmillComponent } from './kingsmill.component';

describe('KingsmillComponent', () => {
  let component: KingsmillComponent;
  let fixture: ComponentFixture<KingsmillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KingsmillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KingsmillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
