import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IEvento } from 'src/app/interfaces/evento.interface';

@Component({
  selector: 'app-evento-detail',
  templateUrl: './evento-detail.component.html',
  styleUrls: ['./evento-detail.component.css']
})
export class EventoDetailComponent implements OnInit {

  isLoading = true;
  eventoId: number;
  evento: IEvento = <IEvento>{};

  constructor(
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.evento = this.route.snapshot.data.evento;
  }

}
