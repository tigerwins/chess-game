import { Color } from '../constants';
import Board from './board';

export default class Game {
  constructor() {
    this.turn = Color.White;
    this.board = new Board();
  }
}
