import { Curso } from "./cursos";
import { Documentico } from "./document";
import { Person } from "./persons";

export class Student extends Person {
  public conferenciasStudent: Curso[];
  constructor(
    name: string,
    apellido: string,
    documento: Documentico,
    cursos: Curso[],
    conferenciasStudent: Curso[]
  ) {
    super(name, apellido, documento, cursos);
    this.conferenciasStudent = conferenciasStudent;
  }
}
