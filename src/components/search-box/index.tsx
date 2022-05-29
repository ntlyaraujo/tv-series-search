import React, { ChangeEvent } from "react";
import * as Styled from "styles";

interface ISearchBoxProps {
  searchChange: (event:ChangeEvent<HTMLInputElement>) => void;
  searchClick: () => void;
  handleKeypress: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  isPending: boolean;
}

const SearchBox = ({
  searchChange,
  searchClick,
  isPending,
  handleKeypress,
}: ISearchBoxProps) => {
  return (
    <Styled.SectionRow>
      <Styled.SearchBox>
        <Styled.SearchInput
          onChange={searchChange}
          placeholder="Search Show"
          onKeyPress={handleKeypress}
        />
        <Styled.SearchButton onClick={searchClick}>
          {isPending ? "..." : "Search"}
        </Styled.SearchButton>
      </Styled.SearchBox>
    </Styled.SectionRow>
  );
};

export default SearchBox;
