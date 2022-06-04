import { Curso } from "./cursos";
import { Documentico } from "./document";

export class Person {
  public name: string;
  public apellido: string;
  private documento: Documentico;
  public cursos: Curso[];

  constructor(
    name: string,
    apellido: string,
    documento: Documentico,
    cursos: Curso[]
  ) {
    this.name = name;
    this.apellido = apellido;
    this.documento = documento;
    this.cursos = cursos;
  }
}
