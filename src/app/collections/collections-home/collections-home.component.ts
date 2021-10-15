import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css']
})
export class CollectionsHomeComponent implements OnInit {

  users = [{
    "name": "Kacie Roeby",
    "age": 49,
    "job": "VP Product Management"
  }, {
    "name": "Blakelee St. Louis",
    "age": 25,
    "job": "Business Systems Development Analyst"
  }, {
    "name": "Quinn Petranek",
    "age": 46,
    "job": "Civil Engineer"
  }, {
    "name": "Brinna Gerretsen",
    "age": 16,
    "job": "Electrical Engineer"
  }, {
    "name": "Rooney Chastand",
    "age": 10,
    "job": "Human Resources Assistant II"
  }, {
    "name": "Sissie Lumley",
    "age": 38,
    "job": "Senior Developer"
  }, {
    "name": "Nikoletta Ousby",
    "age": 21,
    "job": "Electrical Engineer"
  },];

  data = [
    {
    title: "Name",
    key: "name"
  },
    {
    title: "Age",
    key: "age"
  },
    {
    title: "Job",
    key: "job"
  },
]

  constructor() { }

  ngOnInit(): void {
  }

}
