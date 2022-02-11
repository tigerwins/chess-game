import { Color, PieceName } from '../../constants';

export default class Pawn extends Piece {
  constructor(color) {
    super(PieceName.Pawn, color);
    this.hasMoved = false;
  }

  move(board, file, rank) {
    if (this.validMove(file, rank)) {
      super(file, rank);
    }
  }

  validMove(board, file, rank) {

    return true;
  }
}
