import { Component, OnInit } from '@angular/core';
import { IEvento } from 'src/app/interfaces/evento.interface';
import { EventosService } from 'src/app/services/eventos.service';

@Component({
  selector: 'app-eventos-show',
  templateUrl: './eventos-show.component.html',
  styleUrls: ['./eventos-show.component.css']
})
export class EventosShowComponent implements OnInit {

  isLoading = true;
  eventos: IEvento[];
  filter = '';

  constructor(private _eventosService: EventosService) {
    this.eventos = _eventosService.getAll();
  }

  ngOnInit(): void {
    this.isLoading = false;
  }

  sortByDate(): void {
    this.eventos.sort((a, b) => a.date < b.date ? -1 : 1);
  }

  sortByPrice(): void {
    this.eventos.sort((a, b) => a.price > b.price ? -1 : 1);
  }

  pushEvento(evento: IEvento): void {
    this.eventos.push(evento);
  }

  deleteEvento(eventoSelected: IEvento): void {
    this.eventos = this.eventos.filter(evento => evento !== eventoSelected);
  }
}
