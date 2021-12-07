import { Razred } from "./razred";

export class Ucenik {
    id!: number;
    ime!: string;
    prezime!: string;
    usmenaOcjena!: number;
    pismenaOcjena!: number;
    zakljucenaOcjena!: number;
    zakljucena!: boolean;
    razred!: Razred;
}
