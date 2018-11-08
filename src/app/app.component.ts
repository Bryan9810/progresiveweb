import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'progresiveweb';
  constructor(private swUpdate:SwUpdate ){

  }
  ngOnInit(): void{
    if(this.swUpdate.isEnabled){
      this.swUpdate.available.subscribe( next: () => {
        window.location.reload();
      })
    }
  }
}
