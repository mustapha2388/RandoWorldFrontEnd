import { Itineraire } from './itineraire';

export class Randonnee {
    constructor(
                public id: number,
                public nom: string,
                public description: string,
                public organisateur: string,
                public dateDeCreation: Date,
                public dateDeDeroulement: string,
                public itineraires: Itineraire[]) {}
}
