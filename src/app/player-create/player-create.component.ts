import { Component, EventEmitter, Output, OnInit } from "@angular/core";

// non component classes
import { Difficulty, GameConfig, Player, Ship, ShipType } from '../model/';

@Component({
    selector: 'player-create',
    templateUrl: './player-create.component.html',
    styleUrls: ['./player-create.component.scss']
})
export class PlayerCreateComponent implements OnInit {
    @Output() playerCreate: EventEmitter<Player> =
    new EventEmitter<Player>(null);

    public readonly difficulties =
        Object.keys(Difficulty).filter(k => typeof Difficulty[k as any] 
        === 'number');

    // Form fields
    public difficulty: Difficulty = Difficulty.Beginner;
    public readonly difficultyEnum = Difficulty;
    public readonly skills = new Array<number>(4);
    public name: String;

    // alert text
    public alertText: String = '';

    constructor() {
    }

    ngOnInit(): void {
        this.difficulty = Difficulty.Beginner;
        for (let counter = 0; counter < this.skills.length; counter++) {
            this.skills[counter] = 0;
        }
    }

    public createCharacter(): void {
        try {
            let player: Player = new Player(this.skills, new Ship(ShipType.GNAT),
            this.name, new GameConfig(this.difficulty));
            this.playerCreate.emit(player);
            this.alertText = "";
        } catch (err) {
            this.alertText = err;
        }
    }
}
