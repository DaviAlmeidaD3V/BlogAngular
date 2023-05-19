import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css', './small-card.responsive.component.css']
})
export class SmallCardComponent implements OnInit {
  constructor(){}

  @Input()
  ImgSmallCard:String = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/330px-No-Image-Placeholder.svg.png"
  @Input()
  TitleSmallCard:String = ""
  @Input()
  TextSmallCard:String= ""
  @Input()
  NamePageSmallCard:String = ""

  ngOnInit(): void {
  }
}
