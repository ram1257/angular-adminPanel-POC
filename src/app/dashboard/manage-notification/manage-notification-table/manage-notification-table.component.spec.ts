import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageNotificationTableComponent } from './manage-notification-table.component';

describe('ManageNotificationTableComponent', () => {
  let component: ManageNotificationTableComponent;
  let fixture: ComponentFixture<ManageNotificationTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageNotificationTableComponent]
    });
    fixture = TestBed.createComponent(ManageNotificationTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
