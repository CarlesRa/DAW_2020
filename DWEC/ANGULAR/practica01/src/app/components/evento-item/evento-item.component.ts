import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IEvento } from 'src/app/interfaces/evento.interface';
import { EventosService } from 'src/app/services/eventos.service';

@Component({
  selector: 'app-evento-item',
  templateUrl: './evento-item.component.html',
  styleUrls: ['./evento-item.component.css']
})
export class EventoItemComponent implements OnInit {

  @Input() evento: IEvento;

  constructor(
    private _eventosService: EventosService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  deleteEvento(): void {
    this._eventosService.deleteEvento(this.evento.id).subscribe(
      response => this.router.navigateByUrl('eventos')
    );
  }
}
