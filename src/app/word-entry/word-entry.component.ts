import { Component, OnInit } from '@angular/core';
import { HttpService } from '../shared/http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-word-entry',
  templateUrl: './word-entry.component.html',
  styleUrls: ['./word-entry.component.css']
})
export class WordEntryComponent implements OnInit {

  constructor(
    private route: ActivatedRoute, 
    private http: HttpService,
    private router: Router
  ) { }

  newWord: string
  responseWordData: Object

  ngOnInit() {
  }

  onClickAdd() {
    let data = JSON.stringify({newWord: this.newWord.toLowerCase().trim()})
    // console.log(data)
    this.http.getWordData(data).subscribe(x => {
      // console.log(x)
      this.responseWordData = x;
    })
  }
}
