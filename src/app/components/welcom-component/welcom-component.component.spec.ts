import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomComponentComponent } from './welcom-component.component';

describe('WelcomComponentComponent', () => {
  let component: WelcomComponentComponent;
  let fixture: ComponentFixture<WelcomComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcomComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WelcomComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
