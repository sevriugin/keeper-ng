import { Component, OnInit } from '@angular/core';
// import { notes } from '../notes';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  list = [];

  constructor() { }

  ngOnInit() {
  }

  addNote(event) {
    this.list.push(event);
  }

  deleteNote(event) {
    this.list = this.list.filter(note => note.id !== event);
  }

}
