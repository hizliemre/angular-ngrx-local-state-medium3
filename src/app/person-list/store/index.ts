import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromReducer from './reducer';

const getFetureState = createFeatureSelector<fromReducer.PersonListState>(fromReducer.featureKey);

export const selectLoading = createSelector(getFetureState, fromReducer.loading);
export const selectAll = createSelector(getFetureState, fromReducer.selectAll);
