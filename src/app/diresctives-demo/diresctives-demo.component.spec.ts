import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiresctivesDemoComponent } from './diresctives-demo.component';

describe('DiresctivesDemoComponent', () => {
  let component: DiresctivesDemoComponent;
  let fixture: ComponentFixture<DiresctivesDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiresctivesDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiresctivesDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
