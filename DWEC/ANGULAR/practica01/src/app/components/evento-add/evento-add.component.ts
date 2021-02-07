import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IEvento } from 'src/app/interfaces/evento.interface';
import { EventosService } from 'src/app/services/eventos.service';

@Component({
  selector: 'app-evento-add',
  templateUrl: './evento-add.component.html',
  styleUrls: ['./evento-add.component.css']
})
export class EventoAddComponent implements OnInit {

  @Output() newEvento = new EventEmitter<IEvento>();
  formulario = document.getElementById('formulario');
  event: IEvento = <IEvento>{};

  constructor(
    private _eventosService: EventosService
  ) { }

  ngOnInit(): void {
  }

  addEvento(): void {
    this._eventosService.addEvent(this.event).subscribe(response => {
      this.newEvento.emit(response);
      this.event = <IEvento>{};
    });
  }

  imageSelected(image: HTMLInputElement): void {
    if (!image.files || image.files.length === 0) {
      return;
    }
    const reader: FileReader = new FileReader();
    reader.readAsDataURL(image.files[0]);
    reader.addEventListener('loadend', e => {
      this.event.image = reader.result as string;
    });
  }

}
