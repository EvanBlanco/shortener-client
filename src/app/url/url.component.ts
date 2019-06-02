import { Component, OnInit } from '@angular/core';
import { Url } from './url';
import { UrlService } from './url.service';

@Component({
  selector: 'app-url',
  templateUrl: './url.component.html',
  styleUrls: ['./url.component.css']
})
export class UrlComponent implements OnInit {

  url: Url;

  constructor(private urlService: UrlService) {
		
	}

  ngOnInit() {
  }

	addUrl(item): void{
		this.url = item;
		this.urlService.addUrl(item);
	}

}
