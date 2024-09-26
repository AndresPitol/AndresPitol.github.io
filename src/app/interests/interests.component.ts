import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-interests',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './interests.component.html',
  styleUrl: './interests.component.css'
})
export class InterestsComponent {

  interets : Array<any> = []

  constructor() {}

  ngOnInit(): void{
    let interest1 = {
      name: "Watch Movies"
    };

    let interest2 = {
      name: "VideoGames"
    };

    let interest3 = {
      name: "Coding"
    };

    let interest4 = {
      name: "Basebol"
    };

    let interest5 = {
      name: "Biology"
    };

    let interest6 = {
      name: "Turtles"
    }

    this.interets.push(interest1);
    this.interets.push(interest2);
    this.interets.push(interest3);
    this.interets.push(interest4);
    this.interets.push(interest5);
    this.interets.push(interest6);
    console.log(this.interets);
  }
}
