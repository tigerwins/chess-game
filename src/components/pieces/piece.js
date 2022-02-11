import { Color, WhiteFile, BlackFile, WhiteRow, BlackRow } from '../../constants';

export default class Piece {
  constructor(name, color) {
    if (isNil(Color[color])) {
      const error = new Error("Not a valid piece color");
      return error;
    }

    this.pieceName = name;
    this.color = color;
  }

  set position(file, rank) {
    this.file = file;
    this.rank = rank;
  }

  get position() {
    return [this.file, this.rank];
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
