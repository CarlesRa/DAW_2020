import { IEvento } from "./evento.interface";

export interface ResponseOk {
  ok: boolean;
  error?: string;
}

export interface ResponseEvents {
  eventos: IEvento[];
}

export interface ResponseEvent {
  evento: IEvento;
}

export interface ResponseDeleteEvento {
  id: number;
}
