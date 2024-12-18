import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FifthLayoutComponent } from './fifth-layout.component';

describe('FifthLayoutComponent', () => {
  let component: FifthLayoutComponent;
  let fixture: ComponentFixture<FifthLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FifthLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FifthLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
