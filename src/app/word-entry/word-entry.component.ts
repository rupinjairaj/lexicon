import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-word-entry',
  templateUrl: './word-entry.component.html',
  styleUrls: ['./word-entry.component.css']
})
export class WordEntryComponent implements OnInit {

  constructor() { }

  newWord: string

  ngOnInit() {
  }

  onClickAdd() {
    console.log(this.newWord)
  }
}
