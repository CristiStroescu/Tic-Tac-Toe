import { Component } from '@angular/core';
import { BoardStateService } from 'src/app/services/board-state.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent {
  isAWin: boolean = false;
  isATie: boolean = false;

  currentSymbol: string = 'assets/images/x.png';

  boardSize: any[] = [1, 2, 3];

  numberOfSymbols: number = 0;

  constructor(private boardService: BoardStateService) {}

  reset() {
    location.reload();
  }

  changeTheCurrentSymbol(data: any) {
    console.log(this.boardService.boardState);
    if (data.symbol == 'assets/images/x.png') {
      this.boardService.boardState[data.x][data.y] = 'x';
      this.verifyTheGame();
      if (!this.isAWin) this.currentSymbol = 'assets/images/zero.png';
    } else {
      this.boardService.boardState[data.x][data.y] = '0';
      this.verifyTheGame();
      if (!this.isAWin) this.currentSymbol = 'assets/images/x.png';
    }
  }

  verifyTheGame() {
    this.numberOfSymbols++;
    if (this.numberOfSymbols >= 5) {
      if (
        this.boardService.boardState[0][0] != '' &&
        this.boardService.boardState[0][0] ===
          this.boardService.boardState[1][1] &&
        this.boardService.boardState[1][1] ===
          this.boardService.boardState[2][2]
      ) {
        this.isAWin = true;
      } else if (
        this.boardService.boardState[0][2] != '' &&
        this.boardService.boardState[0][2] ===
          this.boardService.boardState[1][1] &&
        this.boardService.boardState[1][1] ===
          this.boardService.boardState[2][0]
      ) {
        this.isAWin = true;
      } else if (
        this.boardService.boardState[0][0] != '' &&
        this.boardService.boardState[0][0] ===
          this.boardService.boardState[0][1] &&
        this.boardService.boardState[0][1] ===
          this.boardService.boardState[0][2]
      ) {
        this.isAWin = true;
      } else if (
        this.boardService.boardState[1][0] != '' &&
        this.boardService.boardState[1][0] ===
          this.boardService.boardState[1][1] &&
        this.boardService.boardState[1][1] ===
          this.boardService.boardState[1][2]
      ) {
        this.isAWin = true;
      } else if (
        this.boardService.boardState[2][0] != '' &&
        this.boardService.boardState[2][0] ===
          this.boardService.boardState[2][1] &&
        this.boardService.boardState[2][1] ===
          this.boardService.boardState[2][2]
      ) {
        this.isAWin = true;
      } else if (
        this.boardService.boardState[0][0] != '' &&
        this.boardService.boardState[0][0] ===
          this.boardService.boardState[1][0] &&
        this.boardService.boardState[1][0] ===
          this.boardService.boardState[2][0]
      ) {
        this.isAWin = true;
      } else if (
        this.boardService.boardState[0][1] != '' &&
        this.boardService.boardState[0][1] ===
          this.boardService.boardState[1][1] &&
        this.boardService.boardState[1][1] ===
          this.boardService.boardState[2][1]
      ) {
        this.isAWin = true;
      } else if (
        this.boardService.boardState[0][2] != '' &&
        this.boardService.boardState[0][2] ===
          this.boardService.boardState[1][2] &&
        this.boardService.boardState[1][2] ===
          this.boardService.boardState[2][2]
      ) {
        this.isAWin = true;
      }
      else if (this.numberOfSymbols == 9 && !this.isAWin) this.isATie = true;
    }
  }
}
