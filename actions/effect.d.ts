import { EffectSerialized as EffectSerializedBase, Effect as EffectBase } from './effect-base';
export interface EffectSerialized extends EffectSerializedBase {
    type: string;
}
export declare class Effect extends EffectBase {
    static fromDict(data: EffectSerialized): EffectBase;
}
