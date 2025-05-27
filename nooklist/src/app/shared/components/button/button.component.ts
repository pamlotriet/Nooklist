import { Component, input, output } from '@angular/core';
import { IonButton, IonIcon } from '@ionic/angular/standalone';
@Component({
  selector: 'app-button',
  standalone: true,
  imports: [IonIcon, IonButton],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  label = input<string>('');
  isIcon = input<boolean>(false);
  disabled = input<boolean>(false);
  shape = input<'round' | undefined>('round');
  color = input<
    | 'danger'
    | 'dark'
    | 'light'
    | 'medium'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'tertiary'
    | 'warning'
    | string
    | undefined
  >('primary');
  iconName = input<string>('');
  iconSlot = input<'end' | 'icon-only' | 'start'>('end');
  fill = input<'outline' | 'solid' | undefined>('outline');
  actionEvent = output<void>();
  actionItem() {
    this.actionEvent.emit();
  }
}
