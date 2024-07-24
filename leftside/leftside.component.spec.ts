import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftsideComponent } from './leftside.component';

describe('LeftsideComponent', () => {
  let component: LeftsideComponent;
  let fixture: ComponentFixture<LeftsideComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeftsideComponent]
    });
    fixture = TestBed.createComponent(LeftsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
