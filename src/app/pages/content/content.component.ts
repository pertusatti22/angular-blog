import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  @Input()
  photoCover:string ="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"

  @Input()
  contentTitle:string = "Título Destacado"

  @Input()
  contentDescription:string = "blablabla"
  constructor() { }

  ngOnInit(): void {
  }

}
