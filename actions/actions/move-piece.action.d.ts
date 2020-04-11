import { UUID, Game, PiecePosition, Piece } from "../../models";
import { Action, ActionSerialized } from "../action-base";
import { Effect } from "../effect-base";
export interface MovePieceActionSerialized extends ActionSerialized {
    piece: UUID;
    position: PiecePosition;
}
export declare class MovePieceAction extends Action {
    static readonly type: string;
    private _piece;
    private _position;
    constructor(data: MovePieceActionSerialized);
    get piece(): UUID;
    setPiece(piece: Piece | UUID): void;
    get position(): PiecePosition;
    set position(position: PiecePosition);
    static fromDict(data: MovePieceActionSerialized): MovePieceAction;
    toDict(): MovePieceActionSerialized;
    validate(game: Game): void;
    execute(game: Game): Effect[];
}
