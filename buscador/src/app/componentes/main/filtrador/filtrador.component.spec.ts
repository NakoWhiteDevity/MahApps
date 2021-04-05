import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltradorComponent } from './filtrador.component';

describe('FiltradorComponent', () => {
  let component: FiltradorComponent;
  let fixture: ComponentFixture<FiltradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltradorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
