import {Actions, createEffect, ofType} from "@ngrx/effects";
import {AuthService} from "../../services/auth.service";
import {registerAction, registerSuccessAction, registerFailureAction} from "../actions/register.actions";
import {switchMap, catchError, of, map} from "rxjs";
import {CurrentUserInterface} from "../../../shared/current-user.interface";
import {Injectable} from "@angular/core";

@Injectable()
export class RegisterEffects {
  constructor(private actions$: Actions, private authService: AuthService) {
  }

  register$ = createEffect(() => this.actions$.pipe(
    ofType(registerAction),
    switchMap(({request}) => {
      return this.authService.registerUser(request).pipe(
        map((currentUser: CurrentUserInterface) => {
          return registerSuccessAction({currentUser})
        }),
        catchError(() => {
          return of(registerFailureAction())
        })
      )
    })
  ))
}
