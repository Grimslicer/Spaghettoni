import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  // With () we instantiante, we create an object based on the event emitter class.
  public isOpen = false;

  onClickShow() {
    this.isOpen = !this.isOpen;
  }
}
