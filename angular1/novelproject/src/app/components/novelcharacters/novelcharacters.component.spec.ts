import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovelcharactersComponent } from './novelcharacters.component';

describe('NovelcharactersComponent', () => {
  let component: NovelcharactersComponent;
  let fixture: ComponentFixture<NovelcharactersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovelcharactersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NovelcharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
