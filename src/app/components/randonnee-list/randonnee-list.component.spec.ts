import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RandonneeListComponent } from './randonnee-list.component';

describe('RandonneeListComponent', () => {
  let component: RandonneeListComponent;
  let fixture: ComponentFixture<RandonneeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RandonneeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandonneeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
