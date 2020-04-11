import { Entity, EntitySerialized, UUID } from "./entity";
import { TeamColorStrings, PiecePosition } from "./piece";
import { BoardSerialized, Board } from "./board";
export declare const enum GameState {
    Created = "created",
    Started = "started",
    Finished = "finished"
}
export declare type GameStateStrings = "created" | "started" | "finished";
export declare class GameError extends Error {
}
export interface GameSerialized extends EntitySerialized {
    state: GameStateStrings;
    board: BoardSerialized;
    dealer: TeamColorStrings;
    winner: TeamColorStrings | null;
    disabled_castlings: UUID[];
    en_passant: PiecePosition | null;
    full_move_counter?: number;
}
export declare class Game extends Entity {
    private _state;
    private _board;
    private _dealer;
    private _winner;
    private _disabledCastlings;
    private _enPassant;
    private _fullMoveCounter;
    constructor(data?: Partial<GameSerialized>);
    get state(): GameStateStrings;
    set state(state: GameStateStrings);
    get board(): Board;
    setBoard(board: Board | BoardSerialized): void;
    get dealer(): TeamColorStrings;
    set dealer(dealer: TeamColorStrings);
    get winner(): TeamColorStrings | null;
    set winner(winner: TeamColorStrings | null);
    get disabledCastlings(): Set<UUID>;
    setDisabledCastlings(disabledCastlings: Set<UUID> | UUID[]): void;
    get enPassant(): PiecePosition | null;
    set enPassant(enPassant: PiecePosition | null);
    get fullMoveCounter(): number;
    set fullMoveCounter(fullMoveCounter: number);
    update(data: Partial<GameSerialized>): this;
    static fromDict(data: Partial<GameSerialized>): Game;
    toDict(): GameSerialized;
    create(): void;
}
