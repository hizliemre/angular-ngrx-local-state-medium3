import { createAction, props } from '@ngrx/store';
import { Person } from './models';

export const addPerson = createAction('[PERSON LIST][API] Add', props<{ person: Person }>());
export const addPersonSuccess = createAction('[PERSON LIST][API] Add success', props<{ response: Person }>());
export const addPersonFail = createAction('[PERSON LIST][API] Add fail', props<{ error: Error }>());

export const removePerson = createAction('[PERSON LIST][API] Remove', props<{ person: Person }>());
export const removePersonSuccess = createAction('[PERSON LIST][API] Remove success', props<{ removedPersonId: string }>());
export const removePersonFail = createAction('[PERSON LIST][API] Remove fail', props<{ error: Error }>());

export const destroy = createAction('[PERSON LIST][STATE] Destroy');

