import { ShowsState } from "core/redux/reducers/shows-reducer";

export const selectShows = (state: { shows: ShowsState; }):ShowsState => state.shows