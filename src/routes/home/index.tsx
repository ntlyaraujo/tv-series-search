import React, { useState, ChangeEvent, KeyboardEventHandler, ChangeEventHandler } from "react";

import { useSelector, useDispatch } from "react-redux";
import * as Styled from "styles";
import SearchBox from "components/search-box";
import ShowList from "components/show-list";
import { requestShowsByKeyword } from "core/redux/actions";
import { selectShows } from "core/redux/selectors";
import Placeholder from "components/placeholder";


const HomePage = () => {
  const dispatch = useDispatch()
  const [searchField, setSearchfield] = useState("");
  const requestedShows = useSelector(selectShows);

  const onSearchClick = () => {
    requestShowsByKeyword(searchField, dispatch);
  };

  const handleKeypress = (event: React.KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === "Enter") {
      onSearchClick();
    }
  };

  const onSearchChange = (event:ChangeEvent<HTMLInputElement>) => {
    setSearchfield(event.target.value);
  };
  return (
    <Styled.SectionColumn>
      <SearchBox
        searchChange={onSearchChange}
        searchClick={onSearchClick}
        handleKeypress={handleKeypress}
        isPending={requestedShows.isPending}
      />
      {requestedShows.shows.length ? (
        <ShowList data={requestedShows.shows} />
      ) : (
        <Placeholder/>
      )}
    </Styled.SectionColumn>
  );
};
export default HomePage;
