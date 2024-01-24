import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  //standalone: true,
  //imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

  public name: string = 'Iron man';
  public age: number = 18;

  get capitalizeName(): string{
    return this.name.toUpperCase();
  }

  getHeroDescription():string{
    return `${ this.name } ${ this.age }`;
  }

  changeName():void{
    this.name = 'Spiderman';
  }

  changeAge():void{
    this.age = 32;
  }
}
