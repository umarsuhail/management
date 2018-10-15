import { Component } from '@angular/core';

export interface Destination {
  label?: string;
  icon?: string;
  disabled?: boolean;
}

@Component({
  selector: 'app-side-draw',
  templateUrl: './side-draw.component.html',
  styleUrls: ['./side-draw.component.css']
})
export class SideDrawComponent {
  destinations = [
    { label: 'Inbox', icon: 'inbox' },
    { label: 'Star', icon: 'star' },
    { label: 'Sent Mail', icon: 'send' },
    { label: 'Drafts', icon: 'drafts' }
  ];

  alternateColors(input: any, className: string) {
    input.elementRef.nativeElement.classList.contains(className) ? input.elementRef.nativeElement.classList.remove(className) :
      input.elementRef.nativeElement.classList.add(className);
  }
}
