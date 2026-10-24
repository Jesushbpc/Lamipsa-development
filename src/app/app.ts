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
    { src: '/images/lamip-logo.webp', alt: 'Logotipo Industrial LAMIP', titulo: 'Industrial LAMIP' },
    { src: '/images/lamip-logo-reference.jpg', alt: 'Identidad Industrial LAMIP', titulo: 'Soluciones industriales' },
  ];
}
