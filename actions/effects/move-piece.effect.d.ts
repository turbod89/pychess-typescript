import { UUID, Game, Piece, PiecePosition } from '../../models';
import { Effect, EffectSerialized } from '../effect-base';
export interface MovePieceEffectSerialized extends EffectSerialized {
    piece: UUID;
    position: PiecePosition;
}
export declare class MovePieceEffect extends Effect {
    static readonly type: string;
    private _piece;
    private _position;
    constructor(data: MovePieceEffectSerialized);
    get piece(): UUID;
    setPiece(piece: Piece | UUID): void;
    get position(): PiecePosition;
    set position(position: PiecePosition);
    static fromDict(data: MovePieceEffectSerialized): MovePieceEffect;
    toDict(): MovePieceEffectSerialized;
    apply(game: Game): void;
}
