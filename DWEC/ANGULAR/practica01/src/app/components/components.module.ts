import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { EventFilterPipe } from "../pipes/event-filter.pipe";
import { EventosShowComponent } from "./eventos-show/eventos-show.component";
import { EventosShowModule } from "./eventos-show/eventos-show.module";

@NgModule({
    declarations: [
      EventosShowComponent,
      EventFilterPipe,
    ],
    imports: [
      EventosShowModule,
      BrowserModule,
      FormsModule,
      ReactiveFormsModule
    ],
    exports: [
        EventosShowComponent
    ]
  })
  export class ComponentsModule {

  }
