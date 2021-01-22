import { Injectable } from '@angular/core';
import { IEvento } from '../interfaces/evento.interface';

@Injectable({
  providedIn: 'root'
})
export class EventosService {

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
  constructor() { }

  getAll(): IEvento[] {
    return this.eventos;
  }
}
