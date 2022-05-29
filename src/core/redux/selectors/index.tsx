import { ShowsState } from "core/redux/reducers";

export const selectShows = (state: { shows: ShowsState; }):ShowsState => state.shows