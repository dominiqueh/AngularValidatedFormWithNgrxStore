import { Action } from '@ngrx/store';
import { Toaster, initialToaster } from './../models/toaster.model';
import * as ToasterActions from './../actions/toaster.actions';

// Helper function for creating a new state object
const newState = (state, newData) => {
  return Object.assign({}, state, newData);
};

// Reducer function
export function toasterReducer(state: Toaster = initialToaster, action: ToasterActions.Actions) {
  switch (action.type) {
    case ToasterActions.BRAND:
      return newState(state, { brandName: action.payload });
    case ToasterActions.DESCRIPTION:
      return newState(state, { description: action.payload });
    case ToasterActions.ALWAYSTOAST:
      return newState(state, { alwaysToast: action.payload });
    default:
      return state;
  }
}
