import { Component, OnInit } from '@angular/core';
import { HttpService } from '../shared/http.service';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent implements OnInit {

  constructor(private http: HttpService) { }

  responseWordData: Object

  ngOnInit() {
    this.http.getListData().subscribe(x => {
      console.log(x)
      this.responseWordData = x
    })
  }

}
