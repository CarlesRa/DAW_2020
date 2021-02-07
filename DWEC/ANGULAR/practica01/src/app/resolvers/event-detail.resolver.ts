import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IEvento } from '../interfaces/evento.interface';
import { EventosService } from '../services/eventos.service';

@Injectable({
  providedIn: 'root'
})
export class EventDetailResolver implements Resolve<IEvento | null> {

  constructor(
    private _eventosService: EventosService,
    private router: Router
  ){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IEvento | null> {
    const id = +route.params.id;
    return this._eventosService.getOne(id).pipe(
      catchError(e => {
        this.router.navigateByUrl('eventos');
        return of(null);
      })
    );
  }
}
