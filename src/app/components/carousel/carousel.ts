import { Component, input, OnDestroy, OnInit, signal } from '@angular/core';

export interface CarouselSlide {
  src: string;
  alt: string;
  titulo?: string;
}

export interface Especificacion {
  key: string;
  value: string;
}

@Component({
  selector: 'app-carousel',
  standalone: true,
  templateUrl: './carousel.html',
  styleUrl: './carousel.scss',
})
export class Carousel implements OnInit, OnDestroy {
  readonly fotos = input.required<CarouselSlide[]>();
  readonly tituloEspecificaciones = input<string>('Especificaciones');
  readonly especificaciones = input<Especificacion[]>([]);
  readonly indice = signal(0);
  readonly pausado = signal(false);
  private timer?: ReturnType<typeof setInterval>;

  ngOnInit(): void {
    this.timer = setInterval(() => {
      const total = this.fotos().length;
      if (!this.pausado() && total > 1) this.indice.update(i => (i + 1) % total);
    }, 2000);
  }

  seleccionar(index: number): void {
    if (index >= 0 && index < this.fotos().length) this.indice.set(index);
  }

  alternarPausa(): void {
    this.pausado.update(valor => !valor);
  }

  ngOnDestroy(): void {
    if (this.timer) clearInterval(this.timer);
  }
}
