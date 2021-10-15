import { Component, OnInit } from '@angular/core';
import {name, lorem, image  } from "faker";

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.css']
})
export class ViewsHomeComponent implements OnInit {

  stats = [
    {
      value: 37,
      label: "faves"
    },
    {
      value: 30150,
      label: "views"
    },
    {
      value: 22,
      label: "members"
    },
  ];

  lists = [
    {
      imgUrl: image.imageUrl(),
      fullName: name.findName(),
      desc: lorem.paragraph(),
    },
    {
      imgUrl: image.nature(),
      fullName: name.findName(),
      desc: lorem.paragraph(),
    },
    {
      imgUrl: image.nightlife(),
      fullName: name.findName(),
      desc: lorem.paragraph(),
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
