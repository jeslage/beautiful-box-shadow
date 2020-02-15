import React from "react";

import {
  StyledHandle,
  StyledLayerList,
  StyledListItem
} from "./LayerList.style";

import {
  SortableContainer,
  SortableElement,
  SortableHandle
} from "react-sortable-hoc";

const DragHandle = SortableHandle(() => (
  <StyledHandle
    xmlns="http://www.w3.org/2000/svg"
    width="10"
    height="18"
    viewBox="0 0 10 18"
  >
    <path d="M2 0a2 2 0 11-2 2 2 2 0 012-2zM8 0a2 2 0 11-2 2 2 2 0 012-2zM8 7a2 2 0 11-2 2 2 2 0 012-2zM8 14a2 2 0 11-2 2 2 2 0 012-2zM2 14a2 2 0 11-2 2 2 2 0 012-2zM2 7a2 2 0 11-2 2 2 2 0 012-2z" />
  </StyledHandle>
));

const ListItem = SortableElement(({ name, active, id, onDelete, onClick }) => (
  <StyledListItem isActive={active}>
    <DragHandle />

    <button onClick={() => onClick(id)}>{name}</button>
    <button onClick={() => onDelete(id)} className="listItem__delete">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
        <path d="M268 416h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12zM432 80h-82.41l-34-56.7A48 48 0 0 0 274.41 0H173.59a48 48 0 0 0-41.16 23.3L98.41 80H16A16 16 0 0 0 0 96v16a16 16 0 0 0 16 16h16v336a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128h16a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16zM171.84 50.91A6 6 0 0 1 177 48h94a6 6 0 0 1 5.15 2.91L293.61 80H154.39zM368 464H80V128h288zm-212-48h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12z"></path>
      </svg>
    </button>
  </StyledListItem>
));

const LayerList = SortableContainer(({ items, onDelete, onClick }) => {
  return (
    <StyledLayerList>
      {items.length > 0 ? (
        items.map(({ name, active, id }, index) => (
          <ListItem
            key={id}
            index={index}
            id={id}
            name={name}
            active={active}
            onDelete={onDelete}
            onClick={onClick}
          />
        ))
      ) : (
        <p>Add your first layer</p>
      )}
    </StyledLayerList>
  );
});

export default LayerList;
