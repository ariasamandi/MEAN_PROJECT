import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddScheuleComponent } from './add-scheule.component';

describe('AddScheuleComponent', () => {
  let component: AddScheuleComponent;
  let fixture: ComponentFixture<AddScheuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddScheuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddScheuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
