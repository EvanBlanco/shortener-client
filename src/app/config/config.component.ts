import { Component, OnInit } from '@angular/core';
import { Config } from './config';
import { ConfigService } from './config.service';

@Component({
  selector: 'app-config'
})
export class ConfigComponent implements OnInit {

  config: Config;
  headers; //Added
  error; //added

  constructor(private configService: ConfigService) {
		
	}

  ngOnInit() {
  	// this.showConfig();
  }

	showConfig() {
	  this.configService.getConfig()
	    .subscribe((data: Config) => this.config = {
	        urlEndPoint: data['urlEndPoint']},
	        error => this.error = error // error path
	    );
	}

	showConfigResponse() {
	  this.configService.getConfigResponse()
	    // resp is of type `HttpResponse<Config>`
	    .subscribe(resp => {
	      // display its headers
	      const keys = resp.headers.keys();
	      this.headers = keys.map(key =>
	        `${key}: ${resp.headers.get(key)}`);

	      // access the body directly, which is typed as `Config`.
	      this.config = { ... resp.body };
	    });
	}

}
