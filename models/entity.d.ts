export { v4 as uuidv4 } from 'uuid';
export declare type UUID = string;
export interface EntitySerialized {
    uuid?: UUID;
}
export declare class Entity {
    private _uuid;
    constructor(data?: Partial<EntitySerialized>);
    get uuid(): UUID;
    static fromDict(data: Partial<EntitySerialized>): Entity;
    toDict(): EntitySerialized;
}
