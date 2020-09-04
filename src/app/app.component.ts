import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'retro-board';
  sectionList = [
    {
      "title": "What went well",
       "type":"wentwell"
    },
    {
      "title": "What can be improved",
      "type": "improvements"
    },
    {
      "title": "Start doing",
      "type": "startdoing"
    },
    {
      "title": "Action items",
      "type": "actionitem"
    }
  ]

}
