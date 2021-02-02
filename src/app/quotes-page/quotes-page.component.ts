import { Component, OnInit, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes-page',
  templateUrl: './quotes-page.component.html',
  styleUrls: ['./quotes-page.component.css'],
})
export class QuotesPageComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(
      'Lewis',
      'For God loved the world so much that he gave his one and only Son, so that everyone who believes in him will not perish but have eternal life. God sent his Son into the world not to judge the world, but to save the world through him.',
      'Jesus',
      new Date(2021, 1, 1)
    ),
    new Quote(
      'Lewis',
      'Love your enemies! Pray for those who persecute you! In that way, you will be acting as true children of your Father in heaven. For he gives his sunlight to both the evil and the good, and he sends rain on the just and the unjust alike.',
      'Jesus',
      new Date(2021, 0, 31)
    ),
  ];

  isComplete = new EventEmitter<boolean>();

  deleteQuote(isComplete: any, index: any) {
    if (isComplete) {
      let toDelete = confirm(
        `Are you sure you want to delete ${this.quotes[index].name}?`
      );

      if (toDelete) {
        this.quotes.splice(index, 1);
      }
    }
  }

  addNewQuote(quote: any) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    this.quotes.unshift(quote);
  }


  upVoteClick(index: any) {
    this.quotes[index].votes += 1;
  }
  downVoteClick(index: any) {
    this.quotes[index].votes -= 1;
  }

  startNum?: number;
  lastNum?: number;
  ctr?: number;

  hUpvote() {
    this.startNum = 0;
    this.lastNum = 0;

    for (this.ctr = 0; this.ctr < this.quotes.length; this.ctr++) {
      this.lastNum = this.quotes[this.ctr].votes;
      if (this.lastNum > this.startNum) {
        this.startNum = this.lastNum;
      }
    }

    return this.startNum;
  }
  constructor() {}

  ngOnInit(): void {}
}
