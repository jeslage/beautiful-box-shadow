import styled from "styled-components";
import React from "react";
import Draggable, { DraggableEventHandler } from "react-draggable";

import { BoxShadowWithAxis } from "../../definitions";

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
  borderRadius,
  rotation
}) => {
  const i = inset ? "inset" : "";
  const shadow = `${i} ${horizontal}px ${vertical}px ${blur}px ${spread}px ${color}`;

  return {
    width: `${width}px`,
    height: `${height}px`,
    borderRadius: `${borderRadius}px`,
    boxShadow: shadow,
    transform: `rotate(${rotation}deg)`,
    background,
    transformOrigin: "center"
  };
};

const StyledShadowBox = styled.div`
  position: absolute;
  cursor: move;
`;

interface ShadowBoxProps {
  item: BoxShadowWithAxis;
  onStop: DraggableEventHandler;
  onClick?: Function;
}

const ShadowBox: React.FC<ShadowBoxProps> = ({ onStop, onClick, item }) => {
  const { x, y, id, name, ...rest } = item;
  return (
    <Draggable axis="both" defaultPosition={{ x, y }} scale={1} onStop={onStop}>
      <StyledShadowBox onClick={() => onClick && onClick()}>
        <div id={id.toString()} style={getBoxShadow(rest)}>
          {name}
        </div>
      </StyledShadowBox>
    </Draggable>
  );
};

export default ShadowBox;
