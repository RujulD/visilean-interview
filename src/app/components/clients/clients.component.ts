import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {
  clients = [
    { logoUrl: 'https://visilean.com/wp-content/uploads/2018/01/logo-four.jpg' },
    { logoUrl: 'https://visilean.com/wp-content/uploads/2019/08/SV-logo_black.png' },
    { logoUrl: 'https://visilean.com/wp-content/uploads/2019/04/zyduss-359x201.jpg' },
    { logoUrl: 'https://visilean.com/wp-content/uploads/2019/08/aa.png' },
    { logoUrl: 'https://visilean.com/wp-content/uploads/2019/09/ALEC-logo-Office-documents.jpg' },
    { logoUrl: 'https://visilean.com/wp-content/uploads/2019/01/Capture.png' },
    { logoUrl: 'https://visilean.com/wp-content/uploads/2018/12/Mace.jpg' },
    { logoUrl: 'https://visilean.com/wp-content/uploads/2020/02/logo.png' },
    { logoUrl: 'https://visilean.com/wp-content/uploads/2020/06/vrs.jpg' },
    { logoUrl: 'https://visilean.com/wp-content/uploads/2020/06/strand-logo.png' },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
