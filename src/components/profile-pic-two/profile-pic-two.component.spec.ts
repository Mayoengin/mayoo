import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilePicTwoComponent } from './profile-pic-two.component';

describe('ProfilePicTwoComponent', () => {
  let component: ProfilePicTwoComponent;
  let fixture: ComponentFixture<ProfilePicTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfilePicTwoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfilePicTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
