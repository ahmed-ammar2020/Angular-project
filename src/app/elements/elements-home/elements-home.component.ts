import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-elements-home',
  templateUrl: './elements-home.component.html',
  styleUrls: ['./elements-home.component.css']
})
export class ElementsHomeComponent implements OnInit {

  header: boolean = true;
  lines: number = 5;
  constructor() { }

  ngOnInit(): void {
  }

}
