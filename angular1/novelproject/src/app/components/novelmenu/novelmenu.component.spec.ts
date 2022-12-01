import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovelmenuComponent } from './novelmenu.component';

describe('NovelmenuComponent', () => {
  let component: NovelmenuComponent;
  let fixture: ComponentFixture<NovelmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovelmenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NovelmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
