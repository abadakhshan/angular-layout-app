import { Component, Input } from '@angular/core';

@Component({
  selector: 'widget',
  templateUrl: 'widget.component.html',
})
export class WidgetType {
  @Input()
  title = 'Widget';

  @Input()
  description: string;

  counter = 0;

  prompt(): void {
    alert(this.counter);
  }
}
