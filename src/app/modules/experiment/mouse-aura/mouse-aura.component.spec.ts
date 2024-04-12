import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MouseAuraComponent } from './mouse-aura.component';

describe('MouseAuraComponent', () => {
  let component: MouseAuraComponent;
  let fixture: ComponentFixture<MouseAuraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MouseAuraComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MouseAuraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
