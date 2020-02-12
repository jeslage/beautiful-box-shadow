import React, { useState } from "react";
import styled from "styled-components";

import { BoxShadow } from "../definitions";

import ShadowBox from "../components/ShadowBox/ShadowBox";
import Range from "../components/Range/Range";
import Switch from "../components/Switch/Switch";
import ColorPicker from "../components/ColorPicker/ColorPicker";

const Panel = styled.aside`
  position: fixed;
  top: 0;
  right: 0;
  max-width: 500px;
  width: 100%;
  background: #f4f4f4;

  .panel__wrapper {
    padding: 2rem;
  }
`;

const Content = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

const IndexPage = () => {
  const [minimized, setMinimized] = React.useState(true);

  const [boxShadow, setBoxShadow] = useState<BoxShadow>({
    horizontal: 0,
    vertical: 0,
    blur: 0,
    spread: 0,
    inset: false,
    color: "#000",
    background: "#fff",
    width: 200,
    height: 200
  });

  return (
    <Content>
      <ShadowBox {...boxShadow} />

      <Panel>
        <button type="button" onClick={() => setMinimized(prev => !prev)}>
          <svg viewBox="0 0 24 24" width="24" height="24">
            <rect height="2" rx="1" width="12" x="6" y="11" />
            {minimized && <rect height="12" rx="1" width="2" x="11" y="6" />}
          </svg>
        </button>
        {!minimized && (
          <div className="panel__wrapper">
            <Range
              label="Horizontal"
              onChange={val =>
                setBoxShadow(prev => ({ ...prev, horizontal: val }))
              }
              value={boxShadow.horizontal}
              min={-100}
            />

            <Range
              label="Vertical"
              onChange={val =>
                setBoxShadow(prev => ({ ...prev, vertical: val }))
              }
              value={boxShadow.vertical}
              min={-100}
            />

            <Range
              label="Blur"
              onChange={val => setBoxShadow(prev => ({ ...prev, blur: val }))}
              value={boxShadow.blur}
            />

            <Range
              label="Spread"
              onChange={val => setBoxShadow(prev => ({ ...prev, spread: val }))}
              value={boxShadow.spread}
              min={-100}
            />

            <Range
              label="Box Width"
              onChange={val => setBoxShadow(prev => ({ ...prev, width: val }))}
              value={boxShadow.width}
              min={1}
              max={500}
            />

            <Range
              label="Box Height"
              onChange={val => setBoxShadow(prev => ({ ...prev, height: val }))}
              value={boxShadow.height}
              min={1}
              max={500}
            />

            <Switch
              label="Inset"
              onChange={val => setBoxShadow(prev => ({ ...prev, inset: val }))}
              value={boxShadow.inset}
            />

            <ColorPicker
              label="Shadow Color"
              onChange={val => setBoxShadow(prev => ({ ...prev, color: val }))}
              value={boxShadow.color}
            />

            <ColorPicker
              label="Background Color"
              onChange={val =>
                setBoxShadow(prev => ({ ...prev, background: val }))
              }
              value={boxShadow.background}
            />
          </div>
        )}
      </Panel>
    </Content>
  );
};

export default IndexPage;
