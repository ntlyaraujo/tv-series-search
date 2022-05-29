import React, { useContext } from "react";
import * as Styled from "styles";
import noPoster from "assets/imgs/no-img-portrait-text.png";

import { Show } from "core/types";

const ShowItem = ({show}: Show) => {
 

  
  const { image, name, network, genres } = show;
  return (
    <Styled.CardLink to="/details" >
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
