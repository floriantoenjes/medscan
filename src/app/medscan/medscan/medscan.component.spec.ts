import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedscanComponent } from './medscan.component';

describe('MedscanComponent', () => {
  let component: MedscanComponent;
  let fixture: ComponentFixture<MedscanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedscanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedscanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
