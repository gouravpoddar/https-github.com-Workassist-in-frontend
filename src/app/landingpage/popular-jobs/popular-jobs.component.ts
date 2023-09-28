import { Component } from '@angular/core';

@Component({
  selector: 'app-popular-jobs',
  templateUrl: './popular-jobs.component.html',
  styleUrls: ['./popular-jobs.component.css']
})
export class PopularJobsComponent{
  cards: string[] = ['Card 1', 'Card 2', 'Card 3']; // Add more cards as needed
  currentIndex: number = 0;
  translateX: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.showSlide(this.currentIndex);
  }

  showSlide(index: number): void {
    if (index < 0) {
      this.currentIndex = this.cards.length - 1;
    } else if (index >= this.cards.length) {
      this.currentIndex = 0;
    }
    this.translateX = -this.currentIndex * 100;
  }

  prevSlide(): void {
    this.currentIndex--;
    this.showSlide(this.currentIndex);
  }

  nextSlide(): void {
    this.currentIndex++;
    this.showSlide(this.currentIndex);
  }
}



