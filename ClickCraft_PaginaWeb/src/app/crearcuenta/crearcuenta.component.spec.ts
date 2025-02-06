import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearcuentaComponent } from './crearcuenta.component';

describe('CrearcuentaComponent', () => {
  let component: CrearcuentaComponent;
  let fixture: ComponentFixture<CrearcuentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearcuentaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearcuentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
