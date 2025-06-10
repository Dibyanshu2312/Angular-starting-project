import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Piping } from './piping';

describe('Piping', () => {
  let component: Piping;
  let fixture: ComponentFixture<Piping>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Piping]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Piping);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
