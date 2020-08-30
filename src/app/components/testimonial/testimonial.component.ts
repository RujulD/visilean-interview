import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss']
})
export class TestimonialComponent implements OnInit {
  testimonials = [
    { title: 'Project Manager', subtitle: 'Construction Company, Finland', message: '“I’d throw out my Excel spreadsheets and do the production control with a solution like yours.”' },
    { title: 'Director of Lean', subtitle: 'Major public sector organisation, UK', message: '“With the current Lean adoption VisiLean is the need of the hour”' },
    { title: 'Senior BIM engineer', subtitle: 'Construction company, USA', message: '“We’re looking for a system that gives us Lean and BIM in one package. We’re fed up of setting up 3-4 systems to carry out a single task – production planning, scheduling, execution and visualisation.”' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
