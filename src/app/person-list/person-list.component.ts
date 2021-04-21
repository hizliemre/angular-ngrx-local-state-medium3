import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import * as fromStore from "./store";
import * as actions from "./store/actions";
import { Person } from "./store/models";

@Component({
  selector: "app-person-list",
  templateUrl: "./person-list.component.html",
  styleUrls: ["./person-list.component.scss"]
})
export class PersonListComponent implements OnInit, OnDestroy {

  persons$: Observable<Person[]>;
  loading$: Observable<boolean>;

  constructor(
    private _store$: Store,
  ) {}

  ngOnInit(): void {
    this.persons$ = this._store$.select(fromStore.selectAll);
    this.loading$ = this._store$.select(fromStore.selectLoading);
  }

  ngOnDestroy(): void {
    this._store$.dispatch(actions.destroy());
  }

  save(name: string, lastname: string): void {
    const person = {
      name,
      lastname
    } as Person;
    this._store$.dispatch(actions.addPerson({ person: person }));
  }

  remove(person: Person): void {
    this._store$.dispatch(
      actions.removePerson({ person })
    );
  }
}
