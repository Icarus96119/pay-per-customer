import { ElementRef, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientLayoutService {

  clientPanelContainer: ElementRef;

  constructor() {
  }

  setAdminPanelContainer(container): void {
    this.clientPanelContainer = container;
  }

  scrollTop(scroll = 0): void {
    this.clientPanelContainer.nativeElement.scrollTop = scroll;
  }
}
