import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextSectionTwoComponent } from './text-section-two.component';

describe('TextSectionTwoComponent', () => {
  let component: TextSectionTwoComponent;
  let fixture: ComponentFixture<TextSectionTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextSectionTwoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextSectionTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
