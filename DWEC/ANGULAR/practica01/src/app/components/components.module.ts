import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { EventFilterPipe } from "../pipes/event-filter.pipe";
import { EventoItemComponent } from "./evento-item/evento-item.component";
import { EventosShowComponent } from "./eventos-show/eventos-show.component";
import { EventosShowModule } from "./eventos-show/eventos-show.module";
import { EventoAddComponent } from './evento-add/evento-add.component';

@NgModule({
    declarations: [
      EventosShowComponent,
      EventFilterPipe,
      EventoItemComponent,
      EventoAddComponent
    ],
    imports: [
      EventosShowModule,
      BrowserModule,
      FormsModule,
      ReactiveFormsModule
    ],
    exports: [
        EventosShowComponent,
        EventoItemComponent,
        EventoAddComponent
    ]
  })
  export class ComponentsModule {

  }
