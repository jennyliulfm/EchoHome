import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent implements OnInit {

  public version: string = "2020";
  
  constructor() { }

  ngOnInit(): void {
  }

}
