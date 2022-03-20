import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Angular-Empty-Project';

  constructor(){}
  btnList:string[] = []

  btnClick1(){
    this.btnList.push('Bottone 1')
  }
  btnClick2(){
    this.btnList.push('Bottone 2')
  }
  btnClick3(){
    this.btnList.push('Bottone 3')
  }
  btnClick4(){
    this.btnList.push('Bottone 4')
  }
}
