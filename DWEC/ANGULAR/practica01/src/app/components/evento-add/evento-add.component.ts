import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IEvento } from 'src/app/interfaces/evento.interface';

@Component({
  selector: 'app-evento-add',
  templateUrl: './evento-add.component.html',
  styleUrls: ['./evento-add.component.css']
})
export class EventoAddComponent implements OnInit {

  @Output() newEvento = new EventEmitter<IEvento>();
  formulario = document.getElementById('formulario');
  evento: IEvento = <IEvento>{};

  constructor() { }

  ngOnInit(): void {
  }

  sendEvento(): void {
    this.newEvento.emit(this.evento);
    this.evento = <IEvento>{};
  }

  imageSelected(image: HTMLInputElement): void {
    if (!image.files || image.files.length === 0) {
      return;
    }
    const reader: FileReader = new FileReader();
    reader.readAsDataURL(image.files[0]);
    reader.addEventListener('loadend', e => {
      this.evento.image = reader.result as string;
    });
  }

}
