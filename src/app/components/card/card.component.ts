import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Card } from 'src/app/core/interfaces/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() card: Card;

  @Input() isCardEdit = false;
  
  @Output() addCardData = new EventEmitter<Card>();

  constructor() {
    this.card = {
      body: ''
    };
   }

  ngOnInit(): void {
    console.log(this.card);
  }
  addCardItem() {
    this.addCardData.emit(this.card);
    this.isCardEdit = false;
  }


}
