import { PiecePosition } from "./piece";
export declare class PiecePositionSet {
    private positions;
    clear(): any;
    add(arg: PiecePosition | PiecePositionSet): void;
    private addPosition;
    private addSet;
    delete(arg: PiecePosition | PiecePositionSet): void;
    private deletePosition;
    private deleteSet;
    has(position: PiecePosition): boolean;
    forEach(f: (value: PiecePosition, key?: PiecePosition, s?: PiecePositionSet) => any): void;
}
