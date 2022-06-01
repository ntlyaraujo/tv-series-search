import React from "react";
import * as Styled from "styles";
import icon from "assets/imgs/icon.png";

type Props = {
  typeMessage: string;
  message: string;
};

const Placeholder = (props: Props) => {
  switch (props.typeMessage) {
    case "Error":
      return (
        <Styled.PlaceholderError>
          <Styled.Paragraph >{props.message}</Styled.Paragraph>
        </Styled.PlaceholderError>
      );
    case "Warning":
      return (
        <Styled.PlaceholderWarning>
          <Styled.Paragraph>{props.message}</Styled.Paragraph>
        </Styled.PlaceholderWarning>
      );
      default:
        return (
          <Styled.Placeholder>
            <img src={icon} alt="Icon" />
            <Styled.Paragraph>{props.message}</Styled.Paragraph>
          </Styled.Placeholder>
        );
  }
};

export default Placeholder;
