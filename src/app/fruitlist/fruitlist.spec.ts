import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fruitlist } from './fruitlist';

describe('Fruitlist', () => {
  let component: Fruitlist;
  let fixture: ComponentFixture<Fruitlist>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Fruitlist]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Fruitlist);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
