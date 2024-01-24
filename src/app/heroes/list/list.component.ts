import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  // standalone: true,
  // imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {

  public herosNames: string[] = ['Spiderman', 'Iron Man'];
  public lastHeroRemoved?: string ;

  removeLastHero():void{
    this.lastHeroRemoved = this.herosNames.pop();
  }
}
