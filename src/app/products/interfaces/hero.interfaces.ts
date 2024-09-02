import { ButtonModule } from 'primeng/button';

export enum Color {

  red, Black, blue, green
}

export interface Hero{

  name:     string;
  canFly:   boolean;
  color:    Color;
}
