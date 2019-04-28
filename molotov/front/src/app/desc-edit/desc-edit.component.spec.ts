import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescEditComponent } from './desc-edit.component';

describe('DescEditComponent', () => {
  let component: DescEditComponent;
  let fixture: ComponentFixture<DescEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
