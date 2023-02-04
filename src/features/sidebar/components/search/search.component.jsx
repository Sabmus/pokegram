import Navigation from "../../../../components/navigation/navigation.component";

import SVG from "../../../../components/svg/svg.component";
import { svgObj } from "../../../../data/svg";

import {
  SearchBox,
  InputBox,
  LatestWrapper,
  LatestHeader,
  LatestSearch,
} from "./search.styles";

function Search() {
  return (
    <>
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
            <span>
              <SVG
                path={svgObj.cancel.svgChildren}
                color={"var(--on-background)"}
                fill="none"
                height="24"
                width="24"
                role="img"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              />
            </span>
          </Navigation>
        </LatestSearch>
      </LatestWrapper>
    </>
  );
}

export default Search;
