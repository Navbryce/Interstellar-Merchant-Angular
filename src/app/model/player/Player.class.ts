import { GameConfig } from './game_config/GameConfig.class';
import { Ship } from './ship/Ship.class';

export class Player {
    private static readonly MAXIMUM_POINTS = 16;
    private static readonly STARTING_CREDITS = 1000;

    public skills: Array<number>;
    public ship: Ship;
    public name: String;
    public config: GameConfig;
    public credits: number;

    /**
     * the constructor for the Player
     *
     * @param skills - the skills of the player (max size of 4)
     * @param ship - the player's ship
     * @param name - the name of the player
     * @param config - the game config
     */
    constructor (skills: Array<number>, ship: Ship, name: String,
            config: GameConfig) {
        // handle skill points
        if (skills.length !== 4) {
            throw new Error('The skills array is invalid');
        }
        this.skills = Object.assign([], skills);
        if (!this.appropriateNumberOfSkillPoints()) {
            throw new Error('You have more points than the max of ' +
            Player.MAXIMUM_POINTS);
        }

        // handle other parameters
        this.ship = ship;
        this.credits = Player.STARTING_CREDITS;
        if ((name == null) || name.length === 0) {
            throw new Error('You must give the player a name');
        } else {
            this.name = name;
        }

        if (config == null) {
            throw new Error('Game config can\'t be null');
        } else {
            this.config = config;
        }
    }

    /**
     * Returns true if the player does not have more than the max number of skill points
     *
     * @return if the player does not have more than the max skill points
     */
    public appropriateNumberOfSkillPoints(): boolean {
        return this.getTotalSkillPoints() <= Player.MAXIMUM_POINTS;
    }

    /**
     * Finds all the points not invested by the playter
     * @return the skills points that have not ben invested by the player
     */
    public getAvailableSkillPoints(): number {
        return Player.MAXIMUM_POINTS - this.getTotalSkillPoints();
    }

    /**
     * Sums all of the skill points invested by a player
     * @return all the skill points invested by a player
     */
    public getTotalSkillPoints(): number {
        let sum = 0;
        for (const skill of this.skills) {
            sum += skill;
        }
        return sum;
    }
}
