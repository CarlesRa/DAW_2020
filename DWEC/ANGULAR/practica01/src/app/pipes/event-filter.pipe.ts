import { Pipe, PipeTransform } from '@angular/core';
import { IEvento } from '../interfaces/evento.interface';

@Pipe({
  name: 'eventFilter'
})
export class EventFilterPipe implements PipeTransform {

  transform(value: IEvento[], args: string): IEvento[] {
    const filter = args ? args.toLocaleLowerCase() : null;
    if (filter) {
      return value.filter(evento =>
        evento.title.toLocaleLowerCase().includes(filter));
    }
    return value;
  }
}
