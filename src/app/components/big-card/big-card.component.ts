import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit{

  @Input()
  PhotoBigCard:String = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/330px-No-Image-Placeholder.svg.png"
  @Input()
  TitleBigCard:String = ""
  @Input()
  DescBigCard:String = ""
  @Input()
  TextBigCard:String = ""
  @Input()
  NamePageBigCard:String = ""

  constructor(){}

  ngOnInit(): void {
  }

}
