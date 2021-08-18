import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {
  togglepara = false;
  num = [];
  constructor() {}

  ngOnInit() {}
  displayDetails() {
    this.togglepara = !this.togglepara;
    this.num.push(this.num.length+1);
  }
}
