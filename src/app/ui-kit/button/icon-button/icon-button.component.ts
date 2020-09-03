import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.scss']
})
export class IconButtonComponent implements OnInit {

  @Input() icon;
  @Input() buttonClass;
  @Input() color;
  @Input() label;

  @Output() handleClick = new EventEmitter<any>();

  isHover = false;

  constructor() {
  }

  ngOnInit(): void {
  }

}
