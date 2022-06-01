import styled, { css } from "styled-components";
import { device } from "utils/constants";
import { Link } from "react-router-dom";

/* CONSTANTS */
const bgLogo = css`
  background-color: #4b4b4b;
`;
const bgPrimary = css`
  background-color: #3c948b;
`;
const bgLight = css`
  background-color: #f8f9fa;
`;
const green = css`
  color: #3c948b;
`;
const white = css`
  color: #fff;
`;
const dark = css`
  color: #4b4b4b;
`;
const lightGray = css`
  color: #adadad;
`;
const borderGreen = css`
  border-style: solid;
  border-width: thin;
  border-color: #3c948b;
`;
const borderBlack = css`
  border-style: solid;
  border-width: thin;
  border-color: black;
`;

const fluid = css`
  width: 100%;
`;
const fixed75 = css`
  width: 75%;
`;
const fixed50 = css`
  width: 50%;
`;
const paddingBase = css`
  padding: 1rem;
`;
const fontBase = css`
  font-size: 1rem;
  font-family: inherit;
`;
const shadow = css`
  box-shadow: 0.3em 0.3em 0.4em #cccccc;
`;
const columnFlex = css`
  display: flex;
  flex-direction: column;
`;
const rowFlex = css`
  display: flex;
  flex-direction: row;
`;

/* COMMON */
export const Span = styled.span`
  margin: 1rem;
  flex-shrink: 3;
  @media ${device.mobile} {
    ${fluid};
  }
  @media ${device.tablet} {
    ${fluid};
  }
  @media ${device.laptop} {
    ${fixed50};
  }
  @media ${device.desktop} {
    ${fixed50};
  }
`;
export const Image = styled.img`
  max-width: 15rem;
`;
export const Paragraph = styled.p`
  font-size: 100%;
  margin-left: 1rem;
`;
export const Icon = styled.img`
  ${fluid}
`;

/* COMMON BUTTONS */
export const ButtonPrimary = styled.button`
  ${bgPrimary};
  ${white};
  ${fontBase};
  ${paddingBase};
  outline: none;
  cursor: pointer;
  min-width: 3rem;
  min-height: 2.5rem;
  border: none;
  border-radius: 0.2rem;
`;

/* LAYOUT */
export const Main = styled.div`
  ${fluid}
  ${columnFlex}
  align-items: center;
`;
export const Container = styled.div`
  @media ${device.mobile} {
    ${fluid};
  }
  @media ${device.tablet} {
    ${fluid};
  }
  @media ${device.laptop} {
    ${fixed75};
  }
  @media ${device.desktop} {
    ${fixed75};
  }
`;
export const Header = styled.div`
  ${bgLogo}
  ${fluid};
`;
export const Logo = styled.img`
  ${fluid};
  height: 30vmin;
`;
export const Content = styled.div`
  ${fluid};
  ${paddingBase}
`;
export const SectionColumn = styled.div`
  ${fluid};
  ${columnFlex}
  margin-top:1rem;
  align-items: center;
`;
export const SectionRow = styled.div`
  ${fluid};
  ${rowFlex}
  margin-top:1rem;
  justify-content: center;
  flex-wrap: wrap;
`;

/* SEARCHBOX */
export const SearchBox = styled.div`
  ${shadow}
  @media ${device.mobile} {
    ${fluid};
  }
  @media ${device.tablet} {
    ${fluid};
    border-right: 0;
  }
  @media ${device.laptop} {
    ${fixed50};
    border-right: 0;
  }
  @media ${device.desktop} {
    ${fixed50};
    border-right: 0;
  }
  ${rowFlex}
  ${borderGreen}
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
  border-radius: 0.2rem;
`;
export const SearchInput = styled.input`
  ${paddingBase}
  ${fontBase}
  border: none;
  flex-grow: 2;
  &:focus {
    outline: none;
  }
`;
export const SearchButton = styled.button`
  ${bgPrimary};
  ${white};
  ${fontBase};
  ${paddingBase}
  @media ${device.fold} {
    display: none;
  }
  cursor: pointer;
  outline: none;
  border: none;
  border-radius: 0 0.2rem 0.2rem 0;
`;

/* CARD SHOW LIST */
export const CardList = styled.div`
  ${rowFlex}
  ${fluid}
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
`;
export const CardLink = styled(Link)`
  text-decoration: none;
`;
export const Card = styled.div`
  ${shadow}
  max-width: 15rem;
  min-height: 30rem;
  margin: 1rem;
  &:hover {
    transform: scale(1.1);
  }
`;
export const CardImageBox = styled.div`
  ${columnFlex}
  align-items: center;
`;
export const CardContent = styled.div`
  ${columnFlex}
  ${paddingBase}
  align-items: flex-start;
`;
export const CardHeading = styled.p`
  ${dark}
  font-weight: bold;
  margin: 0;
`;
export const CardSubtitle = styled.span`
  ${green}
  margin-bottom: 1rem;
`;
export const CardInfo = styled.p`
  ${lightGray}
  margin: 0;
`;

/* PLACEHOLDERS */
export const Placeholder = styled.div`
  ${shadow}
  ${fluid}
  ${borderGreen}
  ${paddingBase}
  ${rowFlex}
  flex-wrap:wrap;
  background-color: #f1f9f8;
  align-items: center;
  justify-content: center;
  margin: 1rem;
`;
export const PlaceholderWarning = styled.div`
  ${shadow}
  ${fluid}
  ${borderBlack}
  ${paddingBase}
  ${rowFlex}
  flex-wrap:wrap;
  background-color: #ffcbc2;
  align-items: center;
  justify-content: center;
  margin: 1rem;
`;
export const PlaceholderError = styled.div`
  ${shadow}
  ${fluid}
  ${borderBlack}
  ${paddingBase}
  ${rowFlex}
  flex-wrap:wrap;
  background-color: #FFC9C2 ;
  align-items: center;
  justify-content: center;
  margin: 1rem;
`;

/* DETAILS BOX */
export const DetailHeader = styled.div`
  ${rowFlex}
  ${fluid}
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  ${paddingBase}
`;
export const DetailBox = styled.div`
  ${rowFlex}
  ${fluid}
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  ${paddingBase}
`;

export const DetailCard = styled.div`
  ${shadow}
  flex-grow: 3;
  flex-basis: 5rem;
  ${bgLight};
  ${paddingBase};
  @media ${device.laptop} {
    margin-top: 1rem;
  }
`;
export const DetailCardHeading = styled.h2`
  ${dark}
  margin: 0;
  font-weight: lighter;
`;
export const TextItem = styled.p`
  margin-top: 0.5rem;
`;
