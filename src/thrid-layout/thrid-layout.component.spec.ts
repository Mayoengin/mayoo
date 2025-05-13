import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdLayoutComponent } from './thrid-layout.component';

describe('ThridLayoutComponent', () => {
  let component: ThirdLayoutComponent;
  let fixture: ComponentFixture<ThirdLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThirdLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThirdLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
