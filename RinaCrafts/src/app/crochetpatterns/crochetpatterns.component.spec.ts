import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrochetpatternsComponent } from './crochetpatterns.component';

describe('CrochetpatternsComponent', () => {
  let component: CrochetpatternsComponent;
  let fixture: ComponentFixture<CrochetpatternsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrochetpatternsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrochetpatternsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
