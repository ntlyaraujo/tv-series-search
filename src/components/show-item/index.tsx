import * as Styled from "styles";
import noPoster from "assets/imgs/no-img-portrait-text.png";

import { Show } from "core/types";
import { useGlobalContext } from "core/contexts";
type Props = {
  show:Show
}

const ShowItem = (props:Props) => {

  
  const { setCopy } = useGlobalContext()
  
  const onCardClick = () => {
    setCopy(props.show);
  };
  
  const { id, image, name, network, genres } = props.show.show;
  return (
    <Styled.CardLink to={id+"/details"} onClick={onCardClick} >
      <Styled.Card>
        <Styled.CardImageBox>
          <Styled.Image
            src={image ? image.medium : noPoster}
            alt="Movie Poster"
            loading="lazy"
          ></Styled.Image>
        </Styled.CardImageBox>
        <Styled.CardContent>
          <Styled.CardHeading>{name}</Styled.CardHeading>
          <Styled.CardSubtitle>
            {network ? network.name : "Network not defined"}
          </Styled.CardSubtitle>
          <Styled.CardInfo>
            <small> {genres ? genres.join(" | ") : "Genres not defined"}</small>
          </Styled.CardInfo>
        </Styled.CardContent>
      </Styled.Card>
    </Styled.CardLink>
  );
};

export default ShowItem;
