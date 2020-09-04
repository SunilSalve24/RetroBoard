import { Component, OnInit, Input } from '@angular/core';

import { CardListService} from '../../core/services/card-list.service';
import { Card } from 'src/app/core/interfaces/card';

@Component({
  selector: 'app-card-section',
  templateUrl: './card-section.component.html',
  styleUrls: ['./card-section.component.scss']
})
export class CardSectionComponent implements OnInit {

  @Input() title: string;
  @Input() type: string; // Type to make API call for get list items from server
  
  editCard = false;

  cardList: Card[];
  constructor(
    private _cardListService: CardListService

  ) { }

  ngOnInit(): void {
    this._cardListService.getCardList(this.type).subscribe((res: Card[]) =>{
      this.cardList = res;
    });
  }

  addCard() {
    this.editCard = true;
  }
  
  saveCard(card: Card) {
    
  }

}
