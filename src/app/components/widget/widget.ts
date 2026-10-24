import { Component, input } from '@angular/core';

@Component({
  selector: 'app-widget',
  standalone: true,
  templateUrl: './widget.html',
  styleUrl: './widget.scss',
})
export class Widget {
  readonly titulo = input.required<string>();
  readonly subtitulo = input.required<string>();
  readonly imagen = input.required<string>();
  readonly imagenAlt = input<string>('');
}
