import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]',
  exportAs: 'appDropDown',
})
export class DropdownDirective {
  private wasInside = false;
  @HostBinding('class.show') private isOpen = false;

  @HostListener('document:click') clickout() {
    if (!this.wasInside) {
      this.isOpen = false;
    }
    this.wasInside = false;
  }
}
