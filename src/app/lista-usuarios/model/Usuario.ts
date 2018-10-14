import {Token} from './Token';

export interface Usuario {
  Nombre: string;
  ClaveEncriptada: string;
  Email: string;
  Tokens: Token[];
}
