import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SymbolStateService } from 'src/app/services/symbol-state.service';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent {
  @Input() x:number=0;
  @Input() y:number=0;
  @Input() isAWin:boolean = false;

  constructor(private symbolService: SymbolStateService){}

  symbol: string='assets/images/default.png';
 
  @Output() valuesToEmit = new EventEmitter<{symbol: string, x: number, y: number}>();

  addSymbol()
  {
    if (!this.isAWin) {
      if (this.symbol == 'assets/images/default.png') {
        this.symbol = this.symbolService.getSymbol();
        const values = { symbol: this.symbol, x: this.x, y: this.y };
        this.valuesToEmit.emit(values);
      }
    }
  }
}
