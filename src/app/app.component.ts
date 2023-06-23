import { Component, OnInit } from '@angular/core';
import { PlayerService } from './players/player.service';
import { Player } from './players/players.model';

@Component({
  selector: 'app-root',
  template: `
    <h1>Player Management</h1>
    <button (click)="getPlayers()">Get Players</button>
    <ul *ngIf="players">
      <li *ngFor="let player of players">{{ player.name }} - {{ player.position }}</li>
    </ul>
  `,
  styles: []
})
export class AppComponent implements OnInit {
  players!: Player[]; // Add the definite assignment assertion

  constructor(private playerService: PlayerService) {}

  ngOnInit(): void {}

  getPlayers(): void {
    this.playerService.getPlayers().subscribe(
      (players) => {
        this.players = players;
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
