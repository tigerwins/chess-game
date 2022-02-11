import { Color, PieceName } from '../../constants';

export default class King extends Piece {
  constructor(color) {
    super(PieceName.King, color);
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
