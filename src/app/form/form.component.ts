import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { Toaster } from '../models/toaster.model';
import * as ToasterActions from '../actions/toaster.actions';

interface AppState {
  toaster: Toaster;
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  toaster: Observable<Toaster>;
  submitted = false;
  breads = ['Sourdough', 'Wheat', 'Rye', 'White', 'English Muffin'];

  constructor(private store: Store<AppState>) {
    this.toaster = this.store.select('toaster');
  }


  addBrandName(brandName: string) {
    this.store.dispatch(new ToasterActions.Brand(brandName));
  }

  addDescription(description: string) {
    this.store.dispatch(new ToasterActions.Description(description));
  }

  selectAlwaysToast(alwaysToast: string) {
    this.store.dispatch(new ToasterActions.Description(alwaysToast));
  }


}
