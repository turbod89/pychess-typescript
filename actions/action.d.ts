import { ActionSerialized as ActionSerializedBase, Action as ActionBase } from './action-base';
export interface ActionSerialized extends ActionSerializedBase {
    type: string;
}
export declare class Action extends ActionBase {
    static fromDict(data: ActionSerialized): ActionBase;
}
