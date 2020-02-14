import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { NextPage, NextPageContext } from 'next';

import useBoxShadows, {
  getDefaultBoxShadow
} from '../hooks/useBoxShadows/useBoxShadows';

import { encodeConfig, decodeConfig } from '../helper';

import ShadowBox from '../components/ShadowBox/ShadowBox';
import Range from '../components/Range/Range';
import Switch from '../components/Switch/Switch';
import ColorPicker from '../components/ColorPicker/ColorPicker';

import { Options } from '../definitions';
import useWindowEvent from '../hooks/useWindowEvent';
import useConfig from '../hooks/useConfig/useConfig';

const Panel = styled.aside`
  position: relative;
  z-index: 999;
  max-width: 400px;
  height: calc(100% - 4rem);
  width: 100%;
  background: #f4f4f4;
  padding: 2rem;
  overflow-y: scroll;

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
  overflow: hidden;

  .content__shadowBox {
    flex-grow: 2;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const IndexPage: NextPage<{ options: Options }> = ({ options }) => {
  const router = useRouter();

  const { items: initialItems, config: initialConfig } = options;

  const {
    currentItem,
    updateCurrentItem,
    addNewItem,
    items,
    updateItemPosition,
    updateActiveItem,
    resetItems,
    duplicateItem
  } = useBoxShadows(initialItems);

  const { config, updateConfig } = useConfig(initialConfig);

  useWindowEvent('keydown', e => {
    if (e.keyCode === 68) {
      duplicateItem();
    }
  });

  useEffect(() => {
    router &&
      router.replace(
        { pathname: '/', query: { items, config } },
        `/?c=${encodeConfig({ items, config })}`,
        {
          shallow: true
        }
      );
  }, [items, config]);

  return (
    <Content>
      <div className="content__shadowBox">
        {items.length > 0 &&
          items
            .slice(0)
            .reverse()
            .map(item => (
              <ShadowBox
                key={item.id}
                item={item}
                gridSize={config.gridSize}
                snapToGrid={config.snapToGrid}
                onStart={() => updateActiveItem(item.id)}
                onStop={(e, data) => {
                  e.preventDefault();
                  updateItemPosition(data.x, data.y, item.id);
                }}
              />
            ))}
      </div>

      <Panel>
        <button onClick={addNewItem}>Add</button>
        <button onClick={resetItems}>Reset</button>
        {items.map(item => (
          <div>
            <button
              key={item.id}
              onClick={() => updateActiveItem(item.id)}
              style={{ fontWeight: item.active ? 'bold' : 'normal' }}
            >
              {item.name}
            </button>
          </div>
        ))}

        <Range
          label="Horizontal"
          onChange={val => updateCurrentItem('horizontal', val)}
          value={currentItem.horizontal}
          min={-100}
          suffix="px"
        />

        <Range
          label="Vertical"
          onChange={val => updateCurrentItem('vertical', val)}
          value={currentItem.vertical}
          min={-100}
          suffix="px"
        />

        <Range
          label="Blur"
          onChange={val => updateCurrentItem('blur', val)}
          value={currentItem.blur}
          suffix="px"
        />

        <Range
          label="Spread"
          onChange={val => updateCurrentItem('spread', val)}
          value={currentItem.spread}
          min={-100}
          suffix="px"
        />

        <Switch
          label="Inset"
          onChange={val => updateCurrentItem('inset', val)}
          value={currentItem.inset}
        />

        <hr />

        <ColorPicker
          label="Shadow Color"
          onChange={val => updateCurrentItem('color', val)}
          value={currentItem.color}
        />

        <ColorPicker
          label="Background Color"
          onChange={val => updateCurrentItem('background', val)}
          value={currentItem.background}
        />

        <hr />

        <Range
          label="Box Width"
          onChange={val => updateCurrentItem('width', val)}
          value={currentItem.width}
          min={1}
          max={1000}
          suffix="px"
        />

        <Range
          label="Box Height"
          onChange={val => updateCurrentItem('height', val)}
          value={currentItem.height}
          min={1}
          max={1000}
          suffix="px"
        />

        <Range
          label="Border Radius"
          onChange={val => updateCurrentItem('borderRadius', val)}
          value={currentItem.borderRadius}
          max={250}
          suffix="px"
        />

        <Range
          label="Rotation"
          onChange={val => updateCurrentItem('rotation', val)}
          value={currentItem.rotation}
          min={-180}
          max={180}
          suffix="°"
        />

        <hr />
        <Switch
          label="Snap to grid"
          onChange={val => updateConfig('snapToGrid', val)}
          value={config.snapToGrid}
        />
        <Range
          label="Grid size"
          onChange={val => updateConfig('gridSize', val)}
          value={config.gridSize}
          min={5}
          max={100}
          steps={5}
        />
      </Panel>
    </Content>
  );
};

IndexPage.getInitialProps = async (
  ctx: NextPageContext
): Promise<{ options: Options }> => {
  const { query } = ctx;

  let config = {
    items: [getDefaultBoxShadow(1)],
    config: {
      snapToGrid: false,
      gridSize: 25
    }
  };

  if (query.c) {
    config = { ...config, ...decodeConfig(query.c) };
  }

  return { options: config };
};

export default IndexPage;
