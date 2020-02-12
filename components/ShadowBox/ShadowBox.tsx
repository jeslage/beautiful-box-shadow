import styled, { css } from "styled-components";

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
  height
}: BoxShadow) => {
  const i = inset ? "inset" : "";
  const shadow = `${i} ${horizontal}px ${vertical}px ${blur}px ${spread}px ${color}`;

  return css`
    width: ${width}px;
    height: ${height}px;
    box-shadow: ${shadow};
    background: ${background};
  `;
};

const ShadowBox = styled.div`
  ${getBoxShadow};
`;

export default ShadowBox;
