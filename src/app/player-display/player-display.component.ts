import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";

// non-angular classes
import { Player, ShipType, Difficulty, Universe } from '../model';

@Component({
    selector: 'player-display',
    templateUrl: './player-display.component.html',
    styleUrls: ['./player-display.component.scss']
})
export class PlayerDisplayComponent implements OnChanges {
    @Input() player: Player;
    public difficultyEnum = Difficulty;
    public shipEnum = ShipType;

    ngOnChanges(changes: SimpleChanges): void {
        // create and print the universe if the player is not null
        if (this.player != null) {
            console.log(Universe.generateUniverse().toString());
        }
    }
}
