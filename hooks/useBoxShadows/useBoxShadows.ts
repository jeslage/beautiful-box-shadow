import { useReducer, useState } from "react";
import arrayMove from "array-move";
import nanoid from "nanoid";

import { BoxShadowWithAxis } from "../../definitions";

import { reducer } from "./reducer";

export const getDefaultBoxShadow = (index: number): BoxShadowWithAxis => ({
  id: nanoid(),
  active: true,
  name: `Box ${index}`,
  horizontal: 0,
  vertical: 0,
  blur: 30,
  spread: 0,
  inset: true,
  color: "#999",
  background: "#fff",
  width: 200,
  height: 200,
  borderRadius: 0,
  rotation: 0,
  x: 0,
  y: 0
});

const useBoxShadows = (initialConfig: BoxShadowWithAxis[]) => {
  const [index, setIndex] = useState<number>(initialConfig.length);
  const [items, dispatch] = useReducer(reducer, initialConfig);

  const updateCurrentItem = (
    key: string,
    value: number | boolean | string
  ): void => {
    dispatch({ type: "UPDATE_CURRENT_ITEM", key, value });
  };

  const addNewItem = (): void => {
    setIndex(prev => prev + 1);
    dispatch({ type: "ADD_NEW_ITEM", index: index + 1 });
  };

  const updateItemPosition = (x: number, y: number, id: number) => {
    dispatch({ type: "UPDATE_ITEM_POSITION", x, y, id });
  };

  const updateActiveItem = (id: number) => {
    dispatch({ type: "UPDATE_ACTIVE_ITEM", id });
  };

  const duplicateItem = () => {
    setIndex(prev => prev + 1);
    dispatch({ type: "DUPLICATE_ITEM", id: nanoid(), index: index + 1 });
  };

  const removeItem = (id: number) => {
    if (items.length >= 1) {
      setIndex(prev => prev - 1);
      dispatch({ type: "REMOVE_ITEM", id });
    }
  };

  const resetItems = () => {
    setIndex(1);
    dispatch({ type: "RESET_ITEMS" });
  };

  const sortItems = ({ oldIndex, newIndex }) => {
    dispatch({
      type: "SORT_ITEMS",
      items: arrayMove(items, oldIndex, newIndex)
    });
  };

  return {
    updateCurrentItem,
    currentItem:
      items && items.length > 0 ? items.filter(item => item.active)[0] : null,
    addNewItem,
    items,
    updateItemPosition,
    updateActiveItem,
    resetItems,
    sortItems,
    duplicateItem,
    removeItem
  };
};

export default useBoxShadows;
