import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', './home.responsive.component.css']
})
export class HomeComponent implements OnInit {
  itens:string[] = [];

  constructor() {
    this.itens = ['1', '2', '3', '4']
  }

  ngOnInit(): void {
  }

}
