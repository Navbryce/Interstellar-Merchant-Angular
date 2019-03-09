import { Planet } from './planet';

export class SolarSystem {
    public static readonly MAX_X: number = 500;
    public static readonly MAX_Y: number = 500;

    public planets: Array<Planet>;
    public name: String;
    public x: number;
    public y: number;

    public static generateSolarSystems(): Array<SolarSystem> {
        const output: Array<SolarSystem> = [];
        const planets = Planet.generatePlanets();

        const solarSystemSize = 1;
        while (planets.length > 0) {
            let counter = solarSystemSize;
            const planetsInSystem: Array<Planet> = [];
            while (counter > 0) {
                const randomIndex = Math.floor(Math.random() * planets.length);
                planetsInSystem.push(planets.splice(randomIndex, 1)[0]);
                counter--;
            }
            output.push(new SolarSystem(planetsInSystem));
        }
        return output;
    }

    constructor(planets: Array<Planet>) {
        this.planets = planets;
        this.giveUniqueLocations();
        this.name = planets[0].name;
    }

    public toString(): String {
        let output = `Solar System ${this.name}: \n`;
        output += `x: ${this.x} y: ${this.y} \n`;
        for (const planet of this.planets) {
            output += planet.toString();
        }
        return output;
    }

    private giveUniqueLocations(): void {
        const locationsMap = {};
        for (const planet of this.planets) {
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
            planet.x = x;
            planet.y = y;
        }
    }
}
