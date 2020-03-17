import { Randonnee } from './randonnee';

export class Itineraire {
    constructor(
                public id: number,
                public dateDeCreation: Date,
                public dateDeModification: Date,
                public nomDuCreateur: string,
                public randonnee: Randonnee){}
}
