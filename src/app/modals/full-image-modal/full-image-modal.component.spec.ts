import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullImageModalComponent } from './full-image-modal.component';

describe('FullImageModalComponent', () => {
  let component: FullImageModalComponent;
  let fixture: ComponentFixture<FullImageModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullImageModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FullImageModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
