import React from "react";
import * as Styled from "styles";
import icon from "assets/imgs/icon.png";

const Placeholder = () => (
  <Styled.Placeholder>
    <img src={icon} alt="Icon" />
    <Styled.Paragraph>
      Looking for an accurate and comprehensive TV guide? Then you've come to
      the right place.
    </Styled.Paragraph>
  </Styled.Placeholder>
);

export default Placeholder;
