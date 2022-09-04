import { Color } from '../constants';

export class Piece {
  constructor(name, color) {
    if (!Color[color]) {
      const error = new Error('Not a valid piece color');
      return error;
    }

    this._name = name;
    this._color = color;
  }

  set position(pos) {
    this._file = pos.file;
    this._rank = pos.rank;
  }

  get position() {
    const pos = {
      file: this._file,
      rank: this._rank
    };
    return pos;
  }

  // move(file, rank) {
  //   const newPos = {
  //     file,
  //     rank
  //   };

  //   if (this.validMove(newPos)) {
  //     this.position(newPos);
  //   }
  // }

  // validMove(pos) {
  //   // Will always return false for a generic Piece
  //   // Needs to be overridden by extending class
  //   return false;
  // }
}

export class Pawn extends Piece {
  constructor(color) {
    super('pawn', color);
    this._hasMoved = false;
  }

  // move(file, rank) {
  //   if (this.checkValidMove(file, rank)) {
  //     this.position(file, rank);
  //   }
  // }

  // validMove(pos) {
  //   return true;
  // }
}

export class Knight extends Piece {
  constructor(color) {
    super('knight', color);
  }
}

export class Bishop extends Piece {
  constructor(color) {
    super('bishop', color);
  }
}

export class Rook extends Piece {
  constructor(color) {
    super('rook', color);
    this._hasMoved = false;
  }
}

export class Queen extends Piece {
  constructor(color) {
    super('queen', color);
  }
}

export class King extends Piece {
  constructor(color) {
    super('king', color);
    this._hasMoved = false;
  }
}
