export enum Status {
  begun,
  succeeded,
  failed
}

export interface IAction {
  type: string;
}