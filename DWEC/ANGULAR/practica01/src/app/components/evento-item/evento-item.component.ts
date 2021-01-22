import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IEvento } from 'src/app/interfaces/evento.interface';

@Component({
  selector: 'app-evento-item',
  templateUrl: './evento-item.component.html',
  styleUrls: ['./evento-item.component.css']
})
export class EventoItemComponent implements OnInit {

  @Input() evento: IEvento;
  @Output() delete = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
}
