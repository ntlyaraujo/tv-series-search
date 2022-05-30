import * as Styled from "styles";
import ShowItem from "components/show-item";
import ErrorBoundary from "components/error-boundary";
import { Show } from "core/types";
type ShowListProps = {
  data:Show[]
}

const ShowList = (props:ShowListProps) => {
  return (
    <Styled.SectionColumn>
      <ErrorBoundary>
        <Styled.CardList>
          {props.data.map((item) => (
            <ShowItem show={item} key={item.show.id} />
          ))}
        </Styled.CardList>
      </ErrorBoundary>
    </Styled.SectionColumn>
  );
};

export default ShowList;
