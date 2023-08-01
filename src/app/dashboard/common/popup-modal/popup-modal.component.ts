import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-popup-modal',
  templateUrl: './popup-modal.component.html',
  styleUrls: ['./popup-modal.component.css'],
})
export class PopupModalComponent {
  @Input() isVisible: boolean;
  @Output() closePopUP = new EventEmitter();
  closePopup() {
    this.closePopUP.emit();
  }
}
