import { ShowsState } from "core/redux/reducers/shows-reducer";
import { ShowDetailsState } from "../reducers/show-details-reducer";

export const selectShows = (state: { shows: ShowsState; }):ShowsState => state.shows
export const selectShowDetails = (state: { show: ShowDetailsState; }):ShowDetailsState => state.show