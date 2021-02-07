import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComponentDeactivate } from 'src/app/guards/save-change.guard';
import { IEvento } from 'src/app/interfaces/evento.interface';
import { EventosService } from 'src/app/services/eventos.service';

@Component({
  selector: 'app-evento-add',
  templateUrl: './evento-add.component.html',
  styleUrls: ['./evento-add.component.css']
})
export class EventoAddComponent implements OnInit, ComponentDeactivate {

  formulario = document.getElementById('formulario');
  event: IEvento = <IEvento>{};

  constructor(
    private _eventosService: EventosService,
    private router: Router
  ) { }
  canDeactivate() {
    if (this.event.date != '' && this.event.description != ''
        && this.event.image != '' && this.event.price != null && this.event.title != '') {
      return true;
    }
    return confirm('¿Quieres abandonar la página?, los datos no se guardaran.');
  }

  ngOnInit(): void {
  }

  addEvento(): void {
    if (this.event.date != '' && this.event.description != ''
    && this.event.image != '' && this.event.price != null && this.event.title != '') {
      this._eventosService.addEvent(this.event).subscribe(response => {
        this.router.navigateByUrl('/eventos')
      });
    }
    else {
      alert('Debe rellenar todos los campos para poder crear el evento.');
    }
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
