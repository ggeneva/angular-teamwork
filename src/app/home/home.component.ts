import { Component, OnInit } from '@angular/core';
import { DataService } from '../providers/data.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public items;
  public shits: any;

  constructor(public dataService: DataService) {
    this.items = dataService.test.getObservableList();

    // this.dataService.test.update('-KsiZGMi-PQdqU5sqJKG', { testfieldTwo: 'waw!!!' });
  }

  ngOnInit() {
  }

}
