import { Component, OnInit, Input } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  //selector: 'app-root'
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] =[
    new Quote(1 ,'Theres never any blood in Star Wars movies because all the lasers and lightsabers would cauterize the wounds instantly','By MoonWlker'),
    new Quote(2 , 'There are many men named Hunter, but oddly no women named gatherer.', 'By Trinity'),
    new Quote(3 , 'Turbulence is the pot hole of the sky ', 'By Trinity'),
    new Quote(4 , 'Some innocent pets have given unconditional love to Serial killers', 'By Chun Li'),
    new Quote(5 , 'Blinds are what keep you from being blinded in the morning', 'By Myself'),
    new Quote(6 , 'You hold shift to run because running is upprcase walking', 'By VidGamer'),
  ];

  // toggleDetails(index){
  //   this.quote[].showDescription = !this.qoutes[index].showDescription;
  // }

  completeGoal(isComplete, index){
    if (isComplete) {
      this.quotes.splice(index,1);
    }
  }

    constructor(){}
    

  ngOnInit() {
  }

}
