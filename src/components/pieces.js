import { Color, WhiteFile, BlackFile, WhiteRow, BlackRow } from '../constants';

export class Piece {
  constructor(name, color) {
    if (isNil(Color[color])) {
      const error = new Error("Not a valid piece color");
      return error;
    }

    this._name = name;
    this._color = color;
  }

  set position(file, rank) {
    this._file = file;
    this._rank = rank;
  }

  get position() {
    return [this._file, this._rank];
  }

  move(file, rank) {
    if (this.validMove(file, rank) {
      this.position(file, rank);
    }
  }

  validMove(file, rank) {
    // Will always return false for a generic Piece
    // Needs to be overridden by extending class
    return false;
  }

}

export class Pawn extends Piece {
  constructor(color) {
    super("pawn", color);
    this._hasMoved = false;
  }

  move(file, rank) {
    if (this.checkValidMove(file, rank)) {
      super(file, rank);
    }
  }

  validMove(file, rank) {

    return true;
  }
}
