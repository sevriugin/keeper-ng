import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

interface Note {
  id: number;
  title: string;
  content: string;
}

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
  
  @Input() note : Note;
  @Output() delete = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }

  deleteClicked() {
    this.delete.emit(this.note.id);
  }

}
