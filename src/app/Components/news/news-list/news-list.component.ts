import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {
	//getting input from the parent
  @Input() newsrecievedbynewslist;
  constructor() { }

  ngOnInit() {
  }

}
