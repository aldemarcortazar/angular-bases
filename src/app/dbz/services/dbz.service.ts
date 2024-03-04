import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

import { Character } from '../interfaces/character.interface';

@Injectable({providedIn: 'root'})
export class DbzService {
    constructor() { }

    public characters: Character[] = [
        {
            id: uuid(),
            name: 'Krilin',
            power: 500,
        },
        {
            id: uuid(),
            name: 'Goku',
            power: 10000
        }
    ];

    addCharacter(character: Character){
        this.characters.push({ id: uuid(), ...character });
    }

    // onDeleteId( id: number ){
    //     this.characters.splice(id, 1);
    // }
    onDeleteId(id: string): void {
        this.characters = this.characters.filter( caracter => caracter.id !== id );
    }
    
}