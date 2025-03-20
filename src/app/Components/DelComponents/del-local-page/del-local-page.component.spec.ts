import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelLocalPageComponent } from './del-local-page.component';

describe('DelLocalPageComponent', () => {
  let component: DelLocalPageComponent;
  let fixture: ComponentFixture<DelLocalPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DelLocalPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DelLocalPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
