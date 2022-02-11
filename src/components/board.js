import { Color, WhiteFile, BlackFile, WhiteRow, BlackRow } from '../constants';
import { Pawn, Knight, Bishop, Rook, Queen, King } from './pieces/piece-list';

export default class Board {
  constructor(side) {
    // if (side == Color.White || side == Color.Black) {
      // this.side = side;
      // }
    this.board = Array.from(Array(8), () => new Array(8));
  }

  // sets up the board with all pieces in their starting positions
  newGame() {
    for (i=0; i<8; i++) {
      this.board[1][i] = new Pawn(Color.Black);
      this.board[6][i] = new Pawn(Color.White);

      if (i == 0 || i == 7) {
        this.board[0][i] = new Rook(Color.Black);
        this.board[7][i] = new Rook(Color.White);
      }
      if (i == 1 || i == 6) {
        this.board[0][i] = new Knight(Color.Black);
        this.board[7][i] = new Knight(Color.White);
      }
      if (i == 2 || i == 5) {
        this.board[0][i] = new Bishop(Color.Black);
        this.board[7][i] = new Bishop(Color.White);
      }
      if (i == 3) {
        this.board[0][i] = new Queen(Color.Black);
        this.board[7][i] = new Queen(Color.White);
      }
      if (i == 4) {
        this.board[0][i] = new King(Color.Black);
        this.board[7][i] = new King(Color.White);
      }
    }
  }
}
