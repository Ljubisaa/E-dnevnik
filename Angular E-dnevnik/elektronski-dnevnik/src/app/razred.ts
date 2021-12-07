import { Ucenik } from "./ucenik";

export class Razred {

    id!: number;
    razredOdjeljenje!: string;
    ucenik!: Set<Ucenik>;
}
