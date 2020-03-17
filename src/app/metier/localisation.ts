import { Itineraire } from './itineraire';

export class Localisation {
    constructor(
                public id: number,
                public dataGps: any,
                public itineraire: Itineraire
                ) {}
}
