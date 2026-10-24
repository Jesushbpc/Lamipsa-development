import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Widget } from './components/widget/widget';
import { Carousel, CarouselSlide } from './components/carousel/carousel';

@Component({
  imports: [RouterOutlet, Header, Widget, Carousel],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  readonly fotosCarrusel: CarouselSlide[] = [
    { src: '/images/malla_uno.jpg', alt: 'Malla industrial LAMIP', titulo: 'Mallas de calidad' },
    { src: '/images/malla_dos.jpg', alt: 'Productos de malla metálica', titulo: 'Soluciones industriales' },
  ];
}
