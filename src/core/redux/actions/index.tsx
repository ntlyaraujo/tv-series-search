import { SHOW_ACTION_TYPES, Show } from "core/types";
import { createAction, Action, ActionWithPayload } from "../utils";
import { getShows } from "core/api";

type RequestShowsByKeyword = Action<SHOW_ACTION_TYPES.REQUEST_SHOWS_PENDING>;
type RequestShowsSuccess = ActionWithPayload<
  SHOW_ACTION_TYPES.REQUEST_SHOWS_SUCCESS,
  Show[]
>;
type RequestShowsError = ActionWithPayload<
  SHOW_ACTION_TYPES.REQUEST_SHOWS_ERROR,
  Error
>;
export type ShowAction =
  | RequestShowsByKeyword
  | RequestShowsSuccess
  | RequestShowsError;

const requestShowsSuccess = (response: Show[]): RequestShowsSuccess => {
  return createAction(SHOW_ACTION_TYPES.REQUEST_SHOWS_SUCCESS, response);
};

const requestShowsError = (error: Error): RequestShowsError => {
  return createAction(SHOW_ACTION_TYPES.REQUEST_SHOWS_ERROR, error);
};

export const requestShowsByKeyword = (
  text: string,
  dispatch: any
): RequestShowsByKeyword => {
  let a = dispatch(createAction(SHOW_ACTION_TYPES.REQUEST_SHOWS_PENDING));
  getShows(text)
    .then((response) => {
      dispatch(requestShowsSuccess(response));
    })
    .catch((error) => {
      dispatch(requestShowsError(error));
    });
  return a;
};
