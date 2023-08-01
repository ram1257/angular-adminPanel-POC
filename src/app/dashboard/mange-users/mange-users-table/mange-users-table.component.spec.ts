import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MangeUsersTableComponent } from './mange-users-table.component';

describe('MangeUsersTableComponent', () => {
  let component: MangeUsersTableComponent;
  let fixture: ComponentFixture<MangeUsersTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MangeUsersTableComponent]
    });
    fixture = TestBed.createComponent(MangeUsersTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
