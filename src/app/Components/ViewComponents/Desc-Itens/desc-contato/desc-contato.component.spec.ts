import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescContatoComponent } from './desc-contato.component';

describe('DescContatoComponent', () => {
  let component: DescContatoComponent;
  let fixture: ComponentFixture<DescContatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DescContatoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DescContatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
