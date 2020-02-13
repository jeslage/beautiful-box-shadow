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
  onStart?: DraggableEventHandler;
}

const ShadowBox: React.FC<ShadowBoxProps> = ({ onStop, onStart, item }) => {
  const { x, y, id, ...rest } = item;
  return (
    <Draggable
      axis="both"
      defaultPosition={{ x, y }}
      scale={1}
      onStop={onStop}
      onStart={onStart}
    >
      <StyledShadowBox>
        <div id={id.toString()} style={getBoxShadow(rest)} />
      </StyledShadowBox>
    </Draggable>
  );
};

export default ShadowBox;
