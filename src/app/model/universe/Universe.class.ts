import { SolarSystem } from './SolarSystem.class';

export class Universe {

    public static generateUniverse(): Universe {
        return new Universe(SolarSystem.generateSolarSystems());
    }

    constructor (public solarSystems: Array<SolarSystem>) {
        this.giveUniqueLocations();
    }

    public toString(): string {
        let output = 'Universe: \n';
        for (const solarSystem of this.solarSystems) {
            output += solarSystem.toString() + '\n\n';
        }
        return output;

    }

    private giveUniqueLocations(): void {
        const locationsMap = {};
        for (const system of this.solarSystems) {
            let x: number = null;
            let y: number = null;

            do {
                x = SolarSystem.MAX_X * Math.random();
                y = SolarSystem.MAX_Y * Math.random();
            } while (locationsMap[x] != null && locationsMap[x][y] != null);

            if (locationsMap[x] == null) {
                locationsMap[x] = {};
            }
            locationsMap[x][y] = true;
            system.x = x;
            system.y = y;
        }
    }
}
