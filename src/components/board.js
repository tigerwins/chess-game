import { Pawn, Knight, Bishop, Rook, Queen, King } from './pieces';
import { Color, WhiteFile, WhiteRank } from '../constants';

export default class Board {
  constructor() {
    this.board = Array.from(Array(8), () => new Array(8));
    this.reset();
  }

  reset() {
    for (let file = 0; file < 8; file++) {
      this.board[1][file] = new Pawn(Color.Black);
      this.board[6][file] = new Pawn(Color.White);

      if (file === 0 || file === 7) {
        this.board[0][file] = new Rook(Color.Black);
        this.board[7][file] = new Rook(Color.White);
      }

      if (file === 1 || file === 6) {
        this.board[0][file] = new Knight(Color.Black);
        this.board[7][file] = new Knight(Color.White);
      }

      if (file === 2 || file === 5) {
        this.board[0][file] = new Bishop(Color.Black);
        this.board[7][file] = new Bishop(Color.White);
      }

      if (file === 3) {
        this.board[0][file] = new Queen(Color.Black);
        this.board[7][file] = new Queen(Color.White);
      }

      if (file === 4) {
        this.board[0][file] = new King(Color.Black);
        this.board[7][file] = new King(Color.White);
      }
    }
  }

  getBoardPosition(arrayPos) {
    const boardPos = {
      file: null,
      rank: null
    };

    this.board[arrayPos[0]];
  }

  getArrayPosition(boardPos) {}

  checkValidMove(pos, newPos) {
    // this.board[]
    return true;
  }

  move(pos, newPos) {
    if (this.checkValidMove(pos, newPos)) {
      return;
    }
  }
}
