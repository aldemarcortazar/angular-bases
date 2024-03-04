import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.module.html' ,
  styleUrl: './add-character.component.scss',
})
export class AddCharacterComponent { 

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    id: '',
    name: '',
    power: 0,
  };

  emitCharacter(): void{
    console.log(this.character);
    if( this.character.name.length === 0 ) return;
    this.onNewCharacter.emit(this.character);

    this.character = { name: '', power: 0 }
  }

}
