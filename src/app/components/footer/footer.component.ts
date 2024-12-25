import { menuData } from './../../data/menuData';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css', './footer.component.mobile.css']
})
export class FooterComponent implements OnInit {
	@Input()
	footerLogo:string = '';
	@Input()
	sonyLogo:string = '';
	@Input()
	esrb = '';
	menuItems:any = {};

	constructor() {
		this.menuItems = menuData;
	}

	ngOnInit(): void {

	}
}
