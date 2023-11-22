import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuAdmComponent } from './menu-adm.component';

describe('MenuAdmComponent', () => {
  let component: MenuAdmComponent;
  let fixture: ComponentFixture<MenuAdmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuAdmComponent]
    });
    fixture = TestBed.createComponent(MenuAdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
