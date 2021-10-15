import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {

  @Input() accords: any = [];
  openedAccordIndex: number = 0;

  constructor() { }

  showAnswer(index: number) {
    if (this.openedAccordIndex === index) {
      this.openedAccordIndex = -1;
    } else {
      this.openedAccordIndex = index;
    }

  }

  ngOnInit(): void {
  }

}
