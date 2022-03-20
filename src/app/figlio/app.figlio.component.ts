import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-figlio',
  templateUrl: './app.figlio.component.html',
  styleUrls: ['./app.figlio.component.css']
})
export class AppFiglio {
  title = 'Angular-Empty-Project';
  @Input() lastBtn = "";
  @Input() historyBtn = [""]
}
