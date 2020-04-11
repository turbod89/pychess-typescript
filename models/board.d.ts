import { Entity, EntitySerialized, UUID } from './entity';
import { Piece, PieceSerialized, PiecePosition } from './piece';
export interface BoardSerialized extends EntitySerialized {
    rows: number;
    cols: number;
    pieces: PieceSerialized[];
}
export declare class Board extends Entity {
    private _rows;
    private _cols;
    private _pieces;
    constructor(data?: Partial<BoardSerialized>);
    get rows(): number;
    set rows(rows: number);
    get cols(): number;
    set cols(cols: number);
    get pieces(): Map<UUID, Piece>;
    setPieces(pieces: PieceSerialized[] | Piece[] | Set<Piece> | Set<PieceSerialized> | Map<UUID, Piece>): void;
    update(data: Partial<BoardSerialized>): this;
    static fromDict(data: Partial<BoardSerialized>): Board;
    toDict(): BoardSerialized;
    getPieceInPosition(position: PiecePosition): Piece | null;
}
