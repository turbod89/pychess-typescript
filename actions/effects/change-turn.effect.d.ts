import { Game } from '../../models';
import { Effect, EffectSerialized } from '../effect-base';
export interface ChangeTurnEffectSerialized extends EffectSerialized {
}
export declare class ChangeTurnEffect extends Effect {
    static readonly type: string;
    constructor(data: ChangeTurnEffectSerialized);
    static fromDict(data: ChangeTurnEffectSerialized): ChangeTurnEffect;
    toDict(): ChangeTurnEffectSerialized;
    apply(game: Game): void;
}
