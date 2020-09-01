import { ElementRef, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminLayoutService {

  adminPanelContainer: ElementRef;

  constructor() {
  }

  setAdminPanelContainer(container): void {
    this.adminPanelContainer = container;
  }

  scrollTop(scroll = 0): void {
    this.adminPanelContainer.nativeElement.scrollTop = scroll;
  }
}
