import { Entity, EntitySerialized } from '../models';
import { Game } from '../models';
export interface EffectSerialized extends EntitySerialized {
    type?: string;
}
export declare class Effect extends Entity {
    static readonly type: string;
    constructor(data: EffectSerialized);
    static fromDict(data: EffectSerialized): Effect;
    toDict(): EffectSerialized;
    apply(game: Game): void;
}
