import { SHOW_ACTION_TYPES, ShowDetails } from "core/types";
import { ShowDetailsAction } from "core/redux/actions/show-details-action";
import { emptyShow } from "utils/constants";

export type ShowDetailsState = {
  show: ShowDetails;
  isPending: boolean;
  error: Error | null;
};

const SHOW_DETAILS_INITIAL_STATE: ShowDetailsState = {
  show: emptyShow.show,
  isPending: false,
  error: null,
};

export const showDetailsReducer = (
  state = SHOW_DETAILS_INITIAL_STATE,
  action = {} as ShowDetailsAction
) => {
  const { type } = action;
  switch (type) {
    case SHOW_ACTION_TYPES.REQUEST_SHOW_DETAILS_PENDING:
      return {
        ...state,
        isPending: true,
      };
    case SHOW_ACTION_TYPES.REQUEST_SHOW_DETAILS_SUCCESS:
      return {
        ...state,
        show: action.payload,
        isPending: false,
      };
    case SHOW_ACTION_TYPES.REQUEST_SHOW_DETAILS_ERROR:
      return {
        ...state,
        error: action.payload,
        isPending: false,
      };
    default:
      return state;
  }
};

