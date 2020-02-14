import React from 'react';

import {
  SortableContainer,
  SortableElement,
  SortableHandle
} from 'react-sortable-hoc';
const DragHandle = SortableHandle(() => <span>--</span>);

const BoxItem = SortableElement(({ name }) => (
  <li>
    <DragHandle />
    {name}
  </li>
));

const List = SortableContainer(({ items }) => {
  return (
    <ul>
      {items.map(({ name, id }, index) => (
        <BoxItem key={id} index={index} name={name} />
      ))}
    </ul>
  );
});

const LayerList = ({ items, onSortEnd, onSortStart }) => {
  return (
    <List
      items={items}
      onSortStart={onSortStart}
      onSortEnd={onSortEnd}
      useDragHandle
    />
  );
};

export default LayerList;
