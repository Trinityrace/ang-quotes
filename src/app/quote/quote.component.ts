import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] =[
    {id:1, name:'Theres never any blood in Star Wars movies because all the lasers and lightsabers would cauterize the wounds instantly',details:'By MoonWlker'},
    {id:2, name:'There are many men named Hunter, but oddly no women named gatherer.',details:'By Trinity'},
    {id:3, name:'Turbulence is the pot hole of the sky ',details:'By Trinity'},
    {id:4, name:'Some innocent pets have given unconditional love to Serial killers', details:'By Chun Li'},
    {id:5, name:'Blinds are what keep you from being blinded in the morning',details:'By Myself'},
    {id:6, name:'You hold shift to run because running is upprcase walking',details:'By VidGamer'}
  ];

    constructor(){}
    

  ngOnInit() {
  }

}
