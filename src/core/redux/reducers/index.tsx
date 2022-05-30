import { SHOW_ACTION_TYPES, Show } from "core/types";
import { ShowAction } from "core/redux/actions";
import { emptyShow } from "utils/constants";

export type ShowsState = {
  shows: Show[];
  isPending: boolean;
  error: Error | null;
  showDetails: Show;
};

const SHOWS_INITIAL_STATE: ShowsState = {
  shows: [],
  isPending: false,
  error: null,
  showDetails: emptyShow,
};

export const showsReducer = (
  state = SHOWS_INITIAL_STATE,
  action = {} as ShowAction
) => {
  const { type } = action;
  switch (type) {
    case SHOW_ACTION_TYPES.REQUEST_SHOWS_PENDING:
      return {
        ...state,
        isPending: true,
      };
    case SHOW_ACTION_TYPES.REQUEST_SHOWS_SUCCESS:
      return {
        ...state,
        shows: action.payload,
        isPending: false,
      };
    case SHOW_ACTION_TYPES.REQUEST_SHOWS_ERROR:
      return {
        ...state,
        error: action.payload,
        isPending: false,
      };
    default:
      return state;
  }
};
