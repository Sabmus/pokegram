import Navigation from "../../../../components/navigation/navigation.component";

import {
  SearchWrapper,
  SearchBox,
  InputBox,
  LatestWrapper,
  LatestHeader,
  LatestSearch,
} from "./search.styles";

function Search() {
  return (
    <SearchWrapper>
      <SearchBox>
        <h2>Search</h2>
      </SearchBox>
      <InputBox>
        <input type="search" placeholder="search..." />
      </InputBox>
      <LatestWrapper>
        <LatestHeader>
          <span>Latest</span>
          <span>Delete all</span>
        </LatestHeader>
        <LatestSearch>
          <Navigation>
            <span>foto</span>
            <span style={{ flexGrow: "1" }}>nombre</span>
            <span>X</span>
          </Navigation>
          <Navigation>
            <span>foto</span>
            <span style={{ flexGrow: "1" }}>nombre</span>
            <span>X</span>
          </Navigation>
        </LatestSearch>
      </LatestWrapper>
    </SearchWrapper>
  );
}

export default Search;
