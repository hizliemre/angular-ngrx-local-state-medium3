import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import * as actions from './actions';
import { Person } from './models';

export const featureKey = 'personListState';

export interface PersonListState extends EntityState<Person> {
  loading: boolean;
}

export const entityAdapter: EntityAdapter<Person> = createEntityAdapter<Person>({
  selectId: (entity) => entity.id
});

export const initialState: PersonListState = entityAdapter.getInitialState({
  loading: false,
});

export const reducer = createReducer(
  initialState,
  on(actions.addPerson, (state) => ({ ...state, loading: true })),
  on(actions.addPersonSuccess, (state, action) => ({ ...entityAdapter.addOne(action.response, state), loading: false })),
  on(actions.addPersonFail, (state) => ({ ...state, loading: false })),
  on(actions.removePerson, (state) => ({ ...state, loading: true })),
  on(actions.removePersonSuccess, (state, action) => ({ ...entityAdapter.removeOne(action.removedPersonId, state), loading: false })),
  on(actions.removePersonFail, (state) => ({ ...state, loading: false })),
  on(actions.destroy, () => ({...initialState})),
);

export const loading = (state: PersonListState) => state.loading;
export const { selectAll } = entityAdapter.getSelectors();

