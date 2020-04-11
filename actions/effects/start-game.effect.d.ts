import { Game } from '../../models';
import { Effect, EffectSerialized } from '../effect-base';
export interface StartGameEffectSerialized extends EffectSerialized {
}
export declare class StartGameEffect extends Effect {
    static readonly type: string;
    constructor(data: StartGameEffectSerialized);
    static fromDict(data: StartGameEffectSerialized): StartGameEffect;
    toDict(): StartGameEffectSerialized;
    apply(game: Game): void;
}
