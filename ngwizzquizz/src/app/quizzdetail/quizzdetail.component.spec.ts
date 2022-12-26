import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizzdetailComponent } from './quizzdetail.component';

describe('QuizzdetailComponent', () => {
  let component: QuizzdetailComponent;
  let fixture: ComponentFixture<QuizzdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizzdetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizzdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
