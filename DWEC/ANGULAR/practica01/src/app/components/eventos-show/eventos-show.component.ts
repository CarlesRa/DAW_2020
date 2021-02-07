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
  eventos: IEvento[] = [];
  filter = '';

  constructor(
    private _eventosService: EventosService
  ) {}

  ngOnInit(): void {
    this.getEventos();
  }

  sortByDate(): void {
    this.eventos.sort((a, b) => a.date < b.date ? -1 : 1);
  }

  sortByPrice(): void {
    this.eventos.sort((a, b) => a.price > b.price ? -1 : 1);
  }

  getEventos() {
    this._eventosService.getAll().subscribe(response => {
      this.eventos = response;
      this.isLoading = false;
    },
    err => {
      console.error(err);
    });
  }

  addEvento(evento: IEvento): void {
    this.eventos.push(evento);
  }

  deleteEvento(idEvento: number): void {
    this.eventos = this.eventos.filter(evento => evento.id !== idEvento);
  }
}
