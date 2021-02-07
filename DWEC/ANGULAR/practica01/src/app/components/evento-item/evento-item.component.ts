import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IEvento } from 'src/app/interfaces/evento.interface';
import { EventosService } from 'src/app/services/eventos.service';

@Component({
  selector: 'app-evento-item',
  templateUrl: './evento-item.component.html',
  styleUrls: ['./evento-item.component.css']
})
export class EventoItemComponent implements OnInit {

  @Input() evento: IEvento;
  @Output() delete = new EventEmitter<number>();

  constructor(
    private _eventosService: EventosService
  ) { }

  ngOnInit(): void {
  }

  deleteEvento(): void {
    this._eventosService.deleteEvento(this.evento.id).subscribe(
      response => this.delete.emit(response.id)
    );
  }
}
