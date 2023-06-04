import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SymbolStateService {

  constructor() { }
  symbol: string='assets/images/x.png';
  symbolX: string='assets/images/x.png';
  symbolZero: string='assets/images/zero.png';

  getSymbol()
  {
    if(this.symbol=='assets/images/x.png')
    {
      this.symbol=this.symbolZero;
      return this.symbolX;
    }
    else{
      this.symbol=this.symbolX;
      return this.symbolZero;
    }
  }
}
