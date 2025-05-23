import { Component, input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { IonInput, IonInputPasswordToggle } from '@ionic/angular/standalone';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [IonInput, IonInputPasswordToggle, ReactiveFormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css',
})
export class InputComponent {
  control = input<FormControl>(new FormControl(''));
  label = input<string>('');
  placeholder = input<string>('');
  type = input<string>('text');
  fill = input<'outline' | 'solid' | undefined>('outline');
}
