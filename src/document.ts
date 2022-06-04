export enum DocumenticoType {
  CC = "Cedula de ciudadania",
  CE = "Cedula de extrangeria",
  P = "Pasaporte",
}

export class Documentico {
  public type: DocumenticoType;
  public number: string;
  constructor(type: DocumenticoType, number: string) {
    this.type = type;
    this.number = number;
  }
}
