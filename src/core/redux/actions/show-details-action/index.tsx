import { SHOW_ACTION_TYPES, ShowDetails } from "core/types";
import { createAction, Action, ActionWithPayload } from "core/redux/utils";
import { getShowById } from "core/api";


type RequestShowById = Action<SHOW_ACTION_TYPES.REQUEST_SHOW_DETAILS_PENDING>;
type RequestShowByIdSuccess = ActionWithPayload<
  SHOW_ACTION_TYPES.REQUEST_SHOW_DETAILS_SUCCESS,
  ShowDetails
>;
type RequestShowByIdError = ActionWithPayload<
  SHOW_ACTION_TYPES.REQUEST_SHOW_DETAILS_ERROR,
  Error
>;
export type ShowDetailsAction =
  | RequestShowById
  | RequestShowByIdSuccess
  | RequestShowByIdError;

const requestShowByIdSuccess = (response: ShowDetails): RequestShowByIdSuccess => {
  
  return createAction(SHOW_ACTION_TYPES.REQUEST_SHOW_DETAILS_SUCCESS, response);
};

const requestShowByIdError = (error: Error): RequestShowByIdError => {
  return createAction(SHOW_ACTION_TYPES.REQUEST_SHOW_DETAILS_ERROR, error);
};


export const requestShowById = (
  id: number,
  dispatch: any
): RequestShowById => {
  
  let a = dispatch(createAction(SHOW_ACTION_TYPES.REQUEST_SHOW_DETAILS_PENDING));
  getShowById(id)
    .then((response) => {
      
      dispatch(requestShowByIdSuccess(response));
      
    })
    .catch((error) => {
      dispatch(requestShowByIdError(error));
    });
  return a;
};