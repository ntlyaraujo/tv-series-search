import { NavLink, useParams } from "react-router-dom";
import * as Styled from "styles";
import noPoster from "assets/imgs/no-img-portrait-text.png";
import { removeTags, getTheYear } from "utils/helpers";
import { useGlobalContext } from "core/contexts";
import { Show } from "core/types";

type Props = {
  showDetails: Show;
};

const DeatilsPage = (props: Props) => {
  const { copy } = useGlobalContext();
  const params = useParams();
  
  const {
    image,
    name,
    network,
    status,
    genres,
    summary,
    type,
    premiered,
    ended,
    schedule,
    officialSite,
  } = copy.show;

  return (
    <Styled.SectionColumn>
      <Styled.SectionRow>
        <Styled.DetailHeader>
          <NavLink to="/" end>
            <Styled.ButtonPrimary>Back</Styled.ButtonPrimary>
          </NavLink>
          <Styled.Span> Back to the search</Styled.Span>
        </Styled.DetailHeader>
      </Styled.SectionRow>
      <Styled.DetailBox>
        <Styled.Image
          src={image ? image.medium : noPoster}
          alt={name + " movie poster"}
        ></Styled.Image>
        <Styled.Span>{removeTags(summary)}</Styled.Span>
        <Styled.DetailCard>
          <Styled.DetailCardHeading>Show Info</Styled.DetailCardHeading>
          <Styled.TextItem>
            <b>Network: </b>
            {network?.name + " "}
            {network?.country?.name} (
            {premiered ? getTheYear(premiered) + " - " : "Not started"}
            {ended ? getTheYear(ended) : "Now"})
          </Styled.TextItem>
          <Styled.TextItem>
            <b>Schedule: </b>
            {schedule ? schedule.days.join(" | ") + " - " : ""}
            {schedule ? schedule.time : " - "}
          </Styled.TextItem>
          <Styled.TextItem>
            <b>Status: </b>
            {status}
          </Styled.TextItem>
          <Styled.TextItem>
            <b>Show Type: </b>
            {type}
          </Styled.TextItem>
          <Styled.TextItem>
            <b>Genres: </b>
            {genres ? genres.join(" | ") : ""}
          </Styled.TextItem>
          <Styled.TextItem>
            <b>Official Site: </b>{" "}
            <a
              href={officialSite ? officialSite : ""}
              target="_blank"
              rel="noreferrer"
            >
              {officialSite}
            </a>
          </Styled.TextItem>
        </Styled.DetailCard>
      </Styled.DetailBox>
    </Styled.SectionColumn>
  );
};
export default DeatilsPage;
