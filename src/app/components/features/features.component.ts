import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {
  features = [
    { title: 'Visualize', description: 'With the help of our Gantt and scheduling views you can see the work progress. Using our unique 4D BIM view, you are able to see ongoing work in a 3D view of the model. Colour coding helps to identify work status and alerts.' },
    { title: 'Collaboarative Planning', description: 'Your teams get access to their work to their work packagesand can participate in pull planning sessions by creating look ahead and weekly plans themselves' },
    { title: 'Real Time tracking', description: 'Use quantities or completion % to report on the work progress for each task. When workers and foremen use the Visilean app daily in the field, you will always have a real time view on the project status.' },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
