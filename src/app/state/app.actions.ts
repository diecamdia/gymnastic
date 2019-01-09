import { Action } from '@ngrx/store';

export enum AppActionTypes {
  SimpleRouting = '[App] Simple Routing',
  TriggerToastrSuccess = '[App] Trigger toastr success',
  TriggerToastrInfo = '[App] Trigger toastr info',
  TriggerToastrWarning = '[App] Trigger toastr warning',
  TriggerToastrError = '[App] Trigger toastr error'
}

export class SimpleRouting implements Action {
  readonly type = AppActionTypes.SimpleRouting;

  constructor(public payload: string) { }
}

export class TriggerToastrSuccess implements Action {
  readonly type = AppActionTypes.TriggerToastrSuccess;

  constructor(public payload: { title: string, message: string }) { }
}

export class TriggerToastrInfo implements Action {
  readonly type = AppActionTypes.TriggerToastrInfo;

  constructor(public payload: { title: string, message: string }) { }
}

export class TriggerToastrWarning implements Action {
  readonly type = AppActionTypes.TriggerToastrWarning;

  constructor(public payload: { title: string, message: string }) { }
}

export class TriggerToastrError implements Action {
  readonly type = AppActionTypes.TriggerToastrError;

  constructor(public payload: { title: string, message: string }) { }
}

export type AppActions =
SimpleRouting |
TriggerToastrSuccess |
TriggerToastrInfo |
TriggerToastrWarning |
TriggerToastrError
;
