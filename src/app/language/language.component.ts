import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-language',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './language.component.html',
  styleUrl: './language.component.css'
})
export class LanguageComponent {
  
  lenguages: Array<any> = []

  constructor() {}

  ngOnInit(): void {

    let lenguage1 = {
      name: "Spanish"
    }

    let lenguage2 = {
      name: "English"
    }

    this.lenguages.push(lenguage1);
    this.lenguages.push(lenguage2);
    console.log(this.lenguages);
  }
}
