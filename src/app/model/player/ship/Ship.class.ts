import { ShipType } from './ShipType.enum';

/**
 * Class that represents ships
 */
export class Ship {

    /**
     * Constructor for Ship class
     *
     * @param type - the type of the ship
     */
    constructor(public type: ShipType) {
    }

    /**
     * Gets the ship type
     * @return the ship type
     */
    public getType(): ShipType {
        return this.type;
    }

    /**
     * sets the ship type
     * @param type - the type of the ship
     */
    public setType(type: ShipType): void {
        this.type = type;
    }
}
