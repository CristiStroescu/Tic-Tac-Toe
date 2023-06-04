import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BoardStateService {

  constructor() { }
  [key:number]: (string | null)[];
  boardState=[
    ['','',''],
    ['','',''],
    ['','','']
  ]
}