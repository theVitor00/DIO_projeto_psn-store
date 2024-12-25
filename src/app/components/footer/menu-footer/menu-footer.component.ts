import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-footer',
  templateUrl: './menu-footer.component.html',
  styleUrl: './menu-footer.component.css'
})
export class MenuFooterComponent implements OnInit {

	@Input()
	title:string = '';
	@Input()
	items:any[] = [];

	constructor() {

	}

	ngOnInit(): void {

	}
}
