import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByCountryPageComponent } from './by-country-page.component';

describe('ByCountryPageComponent', () => {
  let component: ByCountryPageComponent;
  let fixture: ComponentFixture<ByCountryPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ByCountryPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ByCountryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
