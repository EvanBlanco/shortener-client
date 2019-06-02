import { Component, OnInit } from '@angular/core';
import { Url } from 'url/url';
import { TopFrequentService } from './top-frequent.service';

@Component({
  selector: 'app-top-frequent',
  templateUrl: './top-frequent.component.html',
  styleUrls: ['./top-frequent.component.css']
})
export class TopFrequentComponent implements OnInit {

	urls: Url[];

	headUrls = ['Original Url', 'Sanitize', 'Short', 'Final Url', 'Visits'];

  constructor(private topFrequentService: TopFrequentService) { }

  ngOnInit() {
  	this.postUrls();
  }

  postUrls(): void{
		this.topFrequentService.postUrls()
  			.subscribe(urls => this.urls);
	}

}
