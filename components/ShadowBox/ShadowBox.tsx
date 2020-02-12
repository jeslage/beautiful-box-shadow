import styled, { css } from "styled-components";
import React from "react";
import Draggable from "react-draggable";

import { BoxShadow } from "../../definitions";

const getBoxShadow = ({
  blur,
  spread,
  horizontal,
  vertical,
  inset,
  color,
  background,
  width,
  height,
  borderRadius
}: BoxShadow) => {
  const i = inset ? "inset" : "";
  const shadow = `${i} ${horizontal}px ${vertical}px ${blur}px ${spread}px ${color}`;

  return css`
    width: ${width}px;
    height: ${height}px;
    border-radius: ${borderRadius}%;
    box-shadow: ${shadow};
    background: ${background};
  `;
};

const StyledShadowBox = styled.div`
  cursor: move;
  ${getBoxShadow}
`;

const ShadowBox = props => (
  <Draggable axis="both" defaultPosition={{ x: 0, y: 0 }} scale={1}>
    <StyledShadowBox {...props} />
  </Draggable>
);

export default ShadowBox;
