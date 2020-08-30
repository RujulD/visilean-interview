import { Component, OnInit, Input } from '@angular/core';

type TestimonialType = {
  title: string;
  subtitle: string;
  message: string;
}

@Component({
  selector: 'app-testimonial-card',
  templateUrl: './testimonial-card.component.html',
  styleUrls: ['./testimonial-card.component.scss']
})
export class TestimonialCardComponent implements OnInit {
  @Input() testimonial: TestimonialType;

  constructor() { }

  ngOnInit(): void {
  }

}
