import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvisadorComponent } from './avisador.component';

describe('AvisadorComponent', () => {
  let component: AvisadorComponent;
  let fixture: ComponentFixture<AvisadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvisadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvisadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
