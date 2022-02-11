import { Color, PieceName } from '../../constants';

export default class Rook extends Piece {
  constructor(color) {
    super(PieceName.Rook, color);
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
