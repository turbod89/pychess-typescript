import { Game } from '../../models';
import { Action, ActionSerialized } from '../action-base';
import { Effect } from '../effect-base';
export interface StartGameActionSerialized extends ActionSerialized {
}
export declare class StartGameAction extends Action {
    static readonly type: string;
    constructor(data: StartGameActionSerialized);
    static fromDict(data: StartGameActionSerialized): StartGameAction;
    toDict(): StartGameActionSerialized;
    validate(game: Game): void;
    execute(game: Game): Effect[];
}
