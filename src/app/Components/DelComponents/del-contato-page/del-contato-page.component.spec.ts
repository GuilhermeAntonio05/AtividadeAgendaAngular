import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelContatoPageComponent } from './del-contato-page.component';

describe('DelContatoPageComponent', () => {
  let component: DelContatoPageComponent;
  let fixture: ComponentFixture<DelContatoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DelContatoPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DelContatoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
