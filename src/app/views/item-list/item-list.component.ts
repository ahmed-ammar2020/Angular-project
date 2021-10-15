import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  @Input() imgUrl: string = "";
  @Input() fullName: string = "";
  @Input() desc: string = "";
  constructor() { }

  ngOnInit(): void {

  }


}
