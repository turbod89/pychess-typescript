import { Game, TeamColorStrings } from "../../models";
import { Effect, EffectSerialized } from "../effect-base";
export interface FinishGameEffectSerialized extends EffectSerialized {
    winner: null | TeamColorStrings;
}
export declare class FinishGameEffect extends Effect {
    static readonly type: string;
    private _winner;
    constructor(data: FinishGameEffectSerialized);
    get winner(): null | TeamColorStrings;
    set winner(winner: null | TeamColorStrings);
    static fromDict(data: FinishGameEffectSerialized): FinishGameEffect;
    toDict(): FinishGameEffectSerialized;
    apply(game: Game): void;
}
