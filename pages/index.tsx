import React, { useState } from "react";
import styled from "styled-components";

import { BoxShadow } from "../definitions";

import ShadowBox from "../components/ShadowBox/ShadowBox";
import Range from "../components/Range/Range";
import Switch from "../components/Switch/Switch";
import ColorPicker from "../components/ColorPicker/ColorPicker";

const Panel = styled.aside`
  position: relative;
  z-index: 999;
  max-width: 500px;
  height: calc(100% - 4rem);
  width: 100%;
  background: #f4f4f4;
  padding: 2rem;

  hr {
    height: 1px;
    background: ${props => props.theme.border};
    outline: 0;
    border: 0;
    opacity: 0.5;
    margin: 1rem 0;
  }
`;

const Content = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;

  .content__shadowBox {
    flex-grow: 2;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const IndexPage = () => {
  const [boxShadow, setBoxShadow] = useState<BoxShadow>({
    horizontal: 0,
    vertical: 0,
    blur: 30,
    spread: 0,
    inset: true,
    color: "#999",
    background: "#fff",
    width: 200,
    height: 200,
    borderRadius: 0
  });

  return (
    <Content>
      <div className="content__shadowBox">
        <ShadowBox {...boxShadow} />
      </div>

      <Panel>
        <Range
          label="Horizontal"
          onChange={val => setBoxShadow(prev => ({ ...prev, horizontal: val }))}
          value={boxShadow.horizontal}
          min={-100}
          suffix="px"
        />

        <Range
          label="Vertical"
          onChange={val => setBoxShadow(prev => ({ ...prev, vertical: val }))}
          value={boxShadow.vertical}
          min={-100}
          suffix="px"
        />

        <Range
          label="Blur"
          onChange={val => setBoxShadow(prev => ({ ...prev, blur: val }))}
          value={boxShadow.blur}
          suffix="px"
        />

        <Range
          label="Spread"
          onChange={val => setBoxShadow(prev => ({ ...prev, spread: val }))}
          value={boxShadow.spread}
          min={-100}
          suffix="px"
        />

        <Switch
          label="Inset"
          onChange={val => setBoxShadow(prev => ({ ...prev, inset: val }))}
          value={boxShadow.inset}
        />

        <hr />

        <ColorPicker
          label="Shadow Color"
          onChange={val => setBoxShadow(prev => ({ ...prev, color: val }))}
          value={boxShadow.color}
        />

        <ColorPicker
          label="Background Color"
          onChange={val => setBoxShadow(prev => ({ ...prev, background: val }))}
          value={boxShadow.background}
        />

        <hr />

        <Range
          label="Box Width"
          onChange={val => setBoxShadow(prev => ({ ...prev, width: val }))}
          value={boxShadow.width}
          min={1}
          max={500}
          suffix="px"
        />

        <Range
          label="Box Height"
          onChange={val => setBoxShadow(prev => ({ ...prev, height: val }))}
          value={boxShadow.height}
          min={1}
          max={500}
          suffix="px"
        />

        <Range
          label="Border Radius"
          onChange={val =>
            setBoxShadow(prev => ({ ...prev, borderRadius: val }))
          }
          value={boxShadow.borderRadius}
          max={50}
          suffix="%"
        />
      </Panel>
    </Content>
  );
};

export default IndexPage;
