import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    private _eventosService: EventosService,
    private router: Router
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

  verDetalle(id: any): void {
    this.router.navigate(['eventos', id]);
  }

  deleteEvento(idEvento: number): void {
    this.eventos = this.eventos.filter(evento => evento.id !== idEvento);
  }

  x(evento: any) {
    console.log(evento);
  }
}
