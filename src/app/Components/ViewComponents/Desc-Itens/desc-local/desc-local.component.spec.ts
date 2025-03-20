import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescLocalComponent } from './desc-local.component';

describe('DescLocalComponent', () => {
  let component: DescLocalComponent;
  let fixture: ComponentFixture<DescLocalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DescLocalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DescLocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
