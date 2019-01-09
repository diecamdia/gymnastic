import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError, tap, concatMapTo } from 'rxjs/operators';
import * as appActions from './app.actions';
import { of } from 'rxjs';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { ToastrCustomService } from '../services/toast-custom.service';
import { ToastrTypes } from '../models/toastr.model';

@Injectable()
export class AppEffects {

  constructor(
    private router: Router,
    private actions$: Actions,
    private toastr: ToastrCustomService
  ) { }

  @Effect({ dispatch: false })
  simpleRouting$ = this.actions$.pipe(
    ofType(appActions.AppActionTypes.SimpleRouting),
    map((action: appActions.SimpleRouting) => action.payload),
    tap((url: string) =>
      this.router.navigateByUrl(url)
    )
  );

  @Effect({ dispatch: false })
  triggerToastrSuccess$ = this.actions$.pipe(
    ofType(appActions.AppActionTypes.TriggerToastrSuccess),
    map((action: appActions.TriggerToastrSuccess) => action.payload),
    tap((data: {title: string, message: string}) =>
      this.toastr.trigger(ToastrTypes.Success, data.title, data.message)
    )
  );

  @Effect({ dispatch: false })
  triggerToastrInfo$ = this.actions$.pipe(
    ofType(appActions.AppActionTypes.TriggerToastrInfo),
    map((action: appActions.TriggerToastrInfo) => action.payload),
    tap((data: {title: string, message: string}) =>
      this.toastr.trigger(ToastrTypes.Info, data.title, data.message)
    )
  );

  @Effect({ dispatch: false })
  triggerToastrWarning$ = this.actions$.pipe(
    ofType(appActions.AppActionTypes.TriggerToastrWarning),
    map((action: appActions.TriggerToastrWarning) => action.payload),
    tap((data: {title: string, message: string}) =>
      this.toastr.trigger(ToastrTypes.Warning, data.title, data.message)
    )
  );

  @Effect({ dispatch: false })
  triggerToastrError$ = this.actions$.pipe(
    ofType(appActions.AppActionTypes.TriggerToastrError),
    map((action: appActions.TriggerToastrError) => action.payload),
    tap((data: {title: string, message: string}) =>
      this.toastr.trigger(ToastrTypes.Error, data.title, data.message)
    )
  );
}
