import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-create-area',
  templateUrl: './create-area.component.html',
  styleUrls: ['./create-area.component.css']
})
export class CreateAreaComponent implements OnInit {

  @Output() add = new EventEmitter();

  title = '';
  content = '';

  constructor() { }

  ngOnInit() {
  }

  addClicked() {
    this.add.emit({ id: Math.floor(Math.random() * 10000 ), title: this.title, content: this.content });
    this.title = ''; 
    this.content = '';
  }

}
