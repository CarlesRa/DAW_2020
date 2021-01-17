import { Component, OnInit } from '@angular/core';
import { IEvento } from 'src/app/interfaces/evento.interface';

@Component({
  selector: 'app-eventos-show',
  templateUrl: './eventos-show.component.html',
  styleUrls: ['./eventos-show.component.css']
})
export class EventosShowComponent implements OnInit {

  newEvento: IEvento = {
    title: '',
    image: '',
    date: '',
    description: '',
    price: 0
  };

  eventos: IEvento[] = [
    {
      title: 'Teatro real',
      image: 'assets/teatro.jpeg',
      date: '2021/01/10',
      description: 'Obra musical ambientada en Alemania',
      price: 28.50
    },
    {
      title: 'Concierto multi cultural',
      image: 'assets/zoo.jpeg',
      date: '2021/03/15',
      description: 'Concierto de Zoo',
      price: 14
    },
    {
      title: 'Teatro real',
      image: 'assets/teatro.jpeg',
      date: '2021/02/10',
      description: 'Obra musical ambientada en Alemania',
      price: 29
    },
    {
      title: 'Concierto multi cultural',
      image: 'assets/zoo.jpeg',
      date: '2021/01/15',
      description: 'Concierto de Zoo',
      price: 12
    },
  ];

  filter = '';

  constructor() { }

  ngOnInit(): void {

  }

  sortByDate(): void {
    this.eventos.sort((a, b) => a.date < b.date ? -1 : 1);
  }

  sortByPrice(): void {
    this.eventos.sort((a, b) => a.price > b.price ? -1 : 1);
  }

  imageSelected(image: HTMLInputElement): void {
    if (!image.files || image.files.length === 0) {
      return;
    }
    const reader: FileReader = new FileReader();
    reader.readAsDataURL(image.files[0]);
    reader.addEventListener('loadend', e => {
      this.newEvento.image = reader.result as string;
    });

  }

  pushEvento(forma: any): void {
    this.eventos.push(this.newEvento);
    this.newEvento = {
      title: '',
      image: '',
      date: '',
      description: '',
      price: 0
    };
    forma.reset();
  }
}
