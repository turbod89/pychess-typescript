import { Entity, EntitySerialized } from '../models';
import { GameError, Game } from '../models';
import { TeamColorStrings } from '../models';
import { Effect } from './effect-base';
export declare class ActionError extends GameError {
}
export interface ActionSerialized extends EntitySerialized {
    owner: TeamColorStrings;
    type?: string;
}
export declare class Action extends Entity {
    static readonly type: string;
    private _owner;
    constructor(data: ActionSerialized);
    get owner(): TeamColorStrings;
    set owner(owner: TeamColorStrings);
    static fromDict(data: ActionSerialized): Action;
    toDict(): ActionSerialized;
    validate(game: Game): void;
    execute(game: Game): Effect[];
}
