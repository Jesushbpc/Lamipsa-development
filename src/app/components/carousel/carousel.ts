import { Component, input, OnDestroy, OnInit, signal } from '@angular/core';

export interface CarouselSlide {
  src: string;
  alt: string;
  titulo?: string;
}

@Component({
  selector: 'app-carousel',
  standalone: true,
  templateUrl: './carousel.html',
  styleUrl: './carousel.scss',
})
export class Carousel implements OnInit, OnDestroy {
  readonly fotos = input.required<CarouselSlide[]>();
  readonly indice = signal(0);
  private timer?: ReturnType<typeof setInterval>;

  ngOnInit(): void {
    this.timer = setInterval(() => {
      const total = this.fotos().length;
      if (total > 1) this.indice.update(i => (i + 1) % total);
    }, 2000);
  }

  seleccionar(index: number): void {
    if (index >= 0 && index < this.fotos().length) {
      this.indice.set(index);
    }
  }

  ngOnDestroy(): void {
    if (this.timer) clearInterval(this.timer);
  }
}
