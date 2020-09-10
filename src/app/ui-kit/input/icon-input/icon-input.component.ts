import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-icon-input',
  templateUrl: './icon-input.component.html',
  styleUrls: ['./icon-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => IconInputComponent),
      multi: true,
    }
  ]
})
export class IconInputComponent implements ControlValueAccessor {

  @Input() label: string;
  @Input() hasPoint = false;
  @Input() icon: string;
  @Input() color: string;
  @Input() placeholder = '';
  @Input() type = 'text';
  @Input() value;
  @Input() min;
  @Input() readonly;

  onChange;

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  setDisabledState(isDisabled: boolean): void {
  }

  registerOnTouched(fn: any): void {
  }

  writeValue(obj: any): void {
    this.value = obj;
  }

  change(value) {
    if (this.type === 'number') {
      value = +value;
    }
    // only when change method registered
    if (this.onChange) {
      this.onChange(value);
    }
  }
}

