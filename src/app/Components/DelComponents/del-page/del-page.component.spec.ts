import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelPageComponent } from './del-page.component';

describe('DelPageComponent', () => {
  let component: DelPageComponent;
  let fixture: ComponentFixture<DelPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DelPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DelPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
