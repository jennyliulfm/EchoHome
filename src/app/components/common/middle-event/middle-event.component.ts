import { Component, OnInit } from '@angular/core';
import { SalesEvent } from 'src/app/models/model';


@Component({
  selector: 'app-middle-event',
  templateUrl: './middle-event.component.html',
  styleUrls: ['./middle-event.component.css']
})
export class MiddleEventComponent implements OnInit {

  public salesEvents: Array<SalesEvent> =[];
  constructor() { }

  ngOnInit(): void {
    this.getSalesEvents();
  }

  /**
   * 
   */
  getSalesEvents() {
    this.salesEvents = [
      {
        id:1,
        name: "Mother's Day",
        photo_url: "./assets/styles/images/banner/topbanner/1.png",
        event_url: "./assets/styles/images/banner/topbanner/1.png",       
      },
      {
        id:3,
        name: "Mother's Day",
        photo_url: "assets/styles/images/banner/topbanner/5.png",
        event_url: "assets/styles/images/banner/topbanner/5.png",       
      },
      {
        id:3,
        name: "Mother's Day",
        photo_url: "assets/styles/images/banner/topbanner/6.png",
        event_url: "assets/styles/images/banner/topbanner/6.png",     
      },
    ];
  }

}
