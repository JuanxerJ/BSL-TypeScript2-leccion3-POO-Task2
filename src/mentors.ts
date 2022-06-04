import { Curso } from "./cursos";
import { Documentico } from "./document";
import { Person } from "./persons";

export class Mentor extends Person {
  public conferenciasMentor: Curso[];
  constructor(
    name: string,
    apellido: string,
    documento: Documentico,
    cursos: Curso[],
    conferenciasMentor: Curso[]
  ) {
    super(name, apellido, documento, cursos);
    this.conferenciasMentor = conferenciasMentor;
  }
  public createNewCurso = (cursito: Curso) => {
    this.conferenciasMentor.push(cursito);
  };
}
