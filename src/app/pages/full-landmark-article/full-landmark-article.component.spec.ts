import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullLandmarkArticleComponent } from './full-landmark-article.component';

describe('FullLandmarkArticleComponent', () => {
  let component: FullLandmarkArticleComponent;
  let fixture: ComponentFixture<FullLandmarkArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullLandmarkArticleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FullLandmarkArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
