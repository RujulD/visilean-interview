import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-client-card',
  templateUrl: './client-card.component.html',
  styleUrls: ['./client-card.component.scss']
})
export class ClientCardComponent implements OnInit {
  @Input() logoUrl: string;

  constructor() { }

  ngOnInit(): void {
  }

}
