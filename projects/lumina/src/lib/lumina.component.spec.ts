import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LuminaComponent } from './lumina.component';

describe('LuminaComponent', () => {
  let component: LuminaComponent;
  let fixture: ComponentFixture<LuminaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LuminaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LuminaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
