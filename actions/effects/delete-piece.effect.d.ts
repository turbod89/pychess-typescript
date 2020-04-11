import { UUID, Game, Piece } from '../../models';
import { Effect, EffectSerialized } from '../effect-base';
export interface DeletePieceEffectSerialized extends EffectSerialized {
    piece: UUID;
}
export declare class DeletePieceEffect extends Effect {
    static readonly type: string;
    private _piece;
    constructor(data: DeletePieceEffectSerialized);
    get piece(): UUID;
    setPiece(piece: Piece | UUID): void;
    static fromDict(data: DeletePieceEffectSerialized): DeletePieceEffect;
    toDict(): DeletePieceEffectSerialized;
    apply(game: Game): void;
}
