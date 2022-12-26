import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizzlistComponent } from './quizzlist.component';

describe('QuizzlistComponent', () => {
  let component: QuizzlistComponent;
  let fixture: ComponentFixture<QuizzlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizzlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizzlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
