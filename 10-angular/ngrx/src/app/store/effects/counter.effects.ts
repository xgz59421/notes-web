
import { Injectable } from "@angular/core"
import { Actions, createEffect, ofType } from "@ngrx/effects"
import { increment, increment_async } from "../actions/counter.actions"
import { mergeMap, map } from "rxjs/operators"
import { timer } from "rxjs"

@Injectable()
export class CounterEffects {
  constructor(private actions: Actions) {
    // this.loadCount.subscribe(console.log)
  }
  loadCount = createEffect(() => {
    return this.actions.pipe(
      ofType(increment_async),
      mergeMap(() => timer(1000).pipe(map(() => increment({ count: 10 }))))
    )
  })
}
