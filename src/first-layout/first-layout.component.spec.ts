import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstLayoutComponent } from './first-layout.component';

describe('FirstLayoutComponent', () => {
  let component: FirstLayoutComponent;
  let fixture: ComponentFixture<FirstLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirstLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
