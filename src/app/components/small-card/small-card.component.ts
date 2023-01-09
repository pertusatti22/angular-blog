import {Component, Input, OnInit} from '@angular/core';
import {dataFake} from "../../data/dataFake";

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {

  @Input()
  Id:string=""
  @Input()
  cardTitle:string = ''
  @Input()
  photoCover: string = ''

  constructor() { }

  ngOnInit(): void {
    this.setValuesToComponent(this.Id)
  }

  setValuesToComponent(id: string) {
    const result = dataFake.filter(
      article => article.id == id
    )[0]
    this.photoCover = result.photo
    this.cardTitle = result.title
  }

}
