import { Component, OnInit } from '@angular/core';
import { menuData } from './data/menuData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
		'./app.component.css',
		'./app.component.mobile.css'
	]
})
export class AppComponent implements OnInit {
  title = 'PSN Store';

	menuData:any = {}

	constructor() { }

	ngOnInit(): void {
		this.menuData = menuData;
	}
}
