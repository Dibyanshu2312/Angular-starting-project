import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Addpro } from './addpro';

describe('Addpro', () => {
  let component: Addpro;
  let fixture: ComponentFixture<Addpro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Addpro]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Addpro);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
