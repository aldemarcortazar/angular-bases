import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
    selector:'app-counter',
    templateUrl: './counter.component.html',
    styleUrl: './counter.component.scss',
})
export class CounterComponent{
    public counter: number = 10;

    increaseValue( value: number ): void{
        this.counter += value;
    }

    resetCounter():void{
        this.counter = 10;    
    }
}