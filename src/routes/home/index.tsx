import React, { useState, ChangeEvent } from "react";

import { useSelector, useDispatch } from "react-redux";
import * as Styled from "styles";
import SearchBox from "components/search-box";
import ShowList from "components/show-list";
import { requestShowsByKeyword } from "core/redux/actions/shows-action";
import { selectShows } from "core/redux/selectors";
import Placeholder from "components/placeholder";
import { setTypeMessage, setMessage } from "utils/helpers";


const HomePage = () => {
  const dispatch = useDispatch();
  const [searchField, setSearchfield] = useState("");
  const [finalSearchField, setFinalSearchField] = useState("");
  const requestedShows = useSelector(selectShows);
  const { shows, isPending, error, isReturnEmpty } = requestedShows;

  const onSearchClick = () => {
    requestShowsByKeyword(searchField, dispatch);
    setFinalSearchField(searchField);
  };

  const handleKeypress = (
    event: React.KeyboardEvent<HTMLInputElement>
  ): void => {
    if (event.key === "Enter") {
      onSearchClick();
    }
  };

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchfield(event.target.value);
  };
  return (
    
      <Styled.SectionColumn>
        <SearchBox
          searchChange={onSearchChange}
          searchClick={onSearchClick}
          handleKeypress={handleKeypress}
          isPending={isPending}
        />

        {shows.length ? (
          <ShowList data={shows} />
        ) : (
          <div>
            <Placeholder
              typeMessage={setTypeMessage(error, shows.length, isReturnEmpty)}
              message={setMessage(
                error,
                shows.length,
                isReturnEmpty,
                finalSearchField
              )}
            />
          </div>
        )}
      </Styled.SectionColumn>
  );
};
export default HomePage;
