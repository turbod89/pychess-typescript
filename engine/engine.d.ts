import { Game, Piece, PiecePosition, TeamColorStrings, Board, PiecePositionSet } from "../models";
export default class Engine {
    private static instance;
    private constructor();
    static getInstance(): Engine;
    getOpponentColor(color: TeamColorStrings): TeamColorStrings;
    isPositionInBoard(board: Board, position: PiecePosition): boolean;
    isMovementEnPassantCapture(game: Game, piece: Piece, targetPosition: PiecePosition): boolean;
    isMovementACastling(game: Game, piece: Piece, targetPosition: PiecePosition): boolean;
    getRookMovementOnCastling(game: Game, piece: Piece, targetPosition: PiecePosition): {
        piece: Piece;
        position: PiecePosition;
    };
    getPieceValidMovements(game: Game, piece: Piece): PiecePositionSet;
    doesMovementLeadToOwnCheck(game: Game, piece: Piece, targetPosition: PiecePosition): boolean;
    getColorAttackablePositions(game: Game, color: TeamColorStrings): PiecePositionSet;
    getPieceAttackablePositions(game: Game, piece: Piece): PiecePositionSet;
    getPieceReachablePositions(game: Game, piece: Piece): PiecePositionSet;
}
