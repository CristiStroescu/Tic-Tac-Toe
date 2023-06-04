import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-turns',
  templateUrl: './turns.component.html',
  styleUrls: ['./turns.component.scss']
})
export class TurnsComponent {
  @Input() imageUrl:string='';
}
