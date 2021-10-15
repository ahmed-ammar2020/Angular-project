import { Component, OnInit } from '@angular/core';
import {lorem} from "faker";

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css']
})
export class ModsHomeComponent implements OnInit {

  opened: boolean = false;
  accords = [
    {
      question: lorem.sentence() + "?",
      answer: lorem.paragraph(),
    },
    {
      question: lorem.sentence() + "?",
      answer: lorem.paragraph(),
    },
    {
      question: lorem.sentence() + "?",
      answer: lorem.paragraph(),
    },
    {
      question: lorem.sentence() + "?",
      answer: lorem.paragraph(),
    },
  ]

  onClick() {
    this.opened = !this.opened;

  }
  constructor() { }

  ngOnInit(): void {
  }

}
