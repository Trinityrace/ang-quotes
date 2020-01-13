import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import { Quote } from '@angular/compiler';
// import { Quote } from '@angular/core';
import { Quote } from '../quote';



@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {

  @Input() quote: Quote;
  @Output() isComplete =new EventEmitter<boolean>();

  quoteDelete(complete:boolean){
    this.isComplete.emit(complete);
  }

  numberoflikes : number =0
  numberofDislikes : number =0
  likebuttonclick(){
    this.numberoflikes++;

  }
  dislikebuttonclick(){
    this.numberofDislikes++;
  }
  
  constructor() { }

  ngOnInit() {
  }

}
