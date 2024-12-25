import { Component, OnInit } from '@angular/core';
import { gameData } from '../../data/gameData';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
	card:any = {}

	ngOnInit(): void {
		this.card = gameData;
	}
}
