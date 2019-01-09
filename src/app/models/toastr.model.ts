export enum ToastrTypes {
    Success = 'success',
    Warning = 'warning',
    Info = 'info',
    Error = 'error',
}

export interface ToastrModel {
    type: ToastrTypes;
    title: string;
    message: string;
}
