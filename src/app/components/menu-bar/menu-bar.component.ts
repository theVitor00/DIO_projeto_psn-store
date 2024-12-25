import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: [
		'./menu-bar.component.css',
		'./menu-bar.component.mobile.css'
	]
})
export class MenuBarComponent {

	isOpen:boolean = false;

	toggleMenu() {
		this.isOpen = !this.isOpen;
	}
}
