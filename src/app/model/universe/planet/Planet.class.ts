import { Tech, Resource, getRandomTech, getRandomResource } from './planet_attributes';

export class Planet {
    public x: number;
    public y: number;

    /**
     * Generates a random list of planets. The planets do not have locations
     */
    public static generatePlanets(): Array<Planet> {
        const output: Array<Planet> = [];
        const names: Array<String> =
        [
            'Jupiter',
            'Kynareth',
            'Julianos',
            'Nirn',
            'Akatosh',
            'Oblivion',
            'Mara',
            'Arkay',
            'Dibella',
            'Zenithar'
        ];
        for (const name of names) {
            output.push(new Planet(name, getRandomTech(), getRandomResource()));
        }
        return output;
    }

    constructor(public name: String, public tech: Tech,
        public resource: Resource) {
    }

    public toString(): string {
        const output = `${this.name} with tech ${Tech[this.tech]} and resource `
            + `${Resource[this.resource]}`;
        return output;
    }

}
