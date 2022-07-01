import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicElementContainerComponent } from './dynamic-element-container.component';

describe('DynamicElementContainerComponent', () => {
  let component: DynamicElementContainerComponent;
  let fixture: ComponentFixture<DynamicElementContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicElementContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicElementContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
