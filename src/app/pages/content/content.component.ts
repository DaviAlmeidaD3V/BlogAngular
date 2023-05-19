import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Data } from '../../data/content';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html', 
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  photoCover:string = ""
  contentTitle:string= ""
  contentText:string = ""
  private IdPage: string | null = ""

  constructor(
    private route: ActivatedRoute
  ){}

  ngOnInit(): void {
    this.route.paramMap.subscribe( value => 
    this.IdPage = (value.get("namePage")))

    this.setValuesToComponent(this.IdPage)

  }

  setValuesToComponent(id:string | null) {
    const result = Data.filter(art => art.NameArticle == id )[0]

    this.photoCover = result.contentPhotoCover
    this.contentTitle = result.contentTitle
    this.contentText = result.contentText
    
  
  }
}
