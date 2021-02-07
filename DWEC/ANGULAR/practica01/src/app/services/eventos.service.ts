import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { IEvento } from '../interfaces/evento.interface';
import { ResponseDeleteEvento, ResponseEvent, ResponseEvents } from '../interfaces/responses';

@Injectable({
  providedIn: 'root'
})
export class EventosService {

  url = 'eventos';

  constructor(
    private _http: HttpClient
  ) { }

  getAll(): Observable<IEvento[]> {
    return this._http.get<ResponseEvents>(this.url).pipe(
      map(response => response.eventos),
      catchError((resp: HttpErrorResponse) => throwError(`Error al obtener los Eventos.
                                              Con código de error: ${resp.status}`)),
    );
  }

  getOne(id: any): Observable<IEvento> {
    return this._http.get<ResponseEvent>(`${this.url}/${id}`).pipe(
      map(resp => resp.evento),
      catchError((resp: HttpErrorResponse) => throwError(`Error obteniendo
      el evento!. Código de servidor: ${resp.status}. Mensaje: ${resp.message}`))
    )
  }

  addEvent(event: IEvento): Observable<IEvento> {
    return this._http.post<ResponseEvent>(this.url, event).pipe(
      map(resp => resp.evento),
      catchError((resp: HttpErrorResponse) => throwError(`Error insertando
      el evento!. Código de servidor: ${resp.status}. Mensaje: ${resp.message}`))
    );
  }

  deleteEvento(id: any): Observable<ResponseDeleteEvento> {
    return this._http.delete<ResponseDeleteEvento>(`${this.url}/${id}`).pipe(
      map(resp => resp),
      catchError((resp: HttpErrorResponse) => throwError(`Error eliminando
      el evento!. Código de servidor: ${resp.status}. Mensaje: ${resp.message}`))
    );
  }
}
