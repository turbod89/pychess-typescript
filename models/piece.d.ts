import { Entity, EntitySerialized } from './entity';
export declare const enum TeamColor {
    White = "w",
    Black = "b"
}
export declare type TeamColorStrings = 'w' | 'b';
export declare const enum PieceType {
    Pawn = "p",
    Rook = "r",
    Knight = "n",
    Bishop = "b",
    Queen = "q",
    King = "k"
}
export declare type PieceTypeStrings = 'p' | 'r' | 'n' | 'b' | 'q' | 'k';
export declare type PiecePosition = [number, number] | null;
export interface PieceSerialized extends EntitySerialized {
    color: TeamColorStrings;
    type: PieceTypeStrings;
    position: PiecePosition;
}
export declare class Piece extends Entity {
    private _color;
    private _type;
    private _position;
    constructor(data?: Partial<PieceSerialized>);
    get color(): TeamColorStrings;
    set color(color: TeamColorStrings);
    get type(): PieceTypeStrings;
    set type(type: PieceTypeStrings);
    get position(): PiecePosition;
    set position(position: PiecePosition);
    update(data: Partial<PieceSerialized>): this;
    static fromDict(data: Partial<PieceSerialized>): Piece;
    toDict(): PieceSerialized;
}
