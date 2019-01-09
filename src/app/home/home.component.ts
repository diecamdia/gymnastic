import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as fromApp from '../state/app.reducer';
import * as appActions from '../state/app.actions';

import { Store } from '@ngrx/store';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit, AfterViewInit {
  private toggled = false;

  constructor(private store: Store<fromApp.State>) { }

  ngOnInit() { }

  ngAfterViewInit() {
    this.store.dispatch(new appActions.TriggerToastrInfo({ title: 'Test', message: 'Test toastr is working!!'}));
  }

  toggle() {
    this.toggled = !this.toggled;
  }
}
