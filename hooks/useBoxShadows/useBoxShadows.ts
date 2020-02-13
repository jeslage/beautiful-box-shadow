import { useReducer } from "react";
import nanoid from "nanoid";

import { BoxShadowWithAxis, Config } from "../../definitions";

import { reducer } from "./reducer";

export const getDefaultBoxShadow = (index: number): BoxShadowWithAxis => ({
  id: nanoid(),
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

const useBoxShadows = (initialConfig: Config) => {
  const { items: initialItems, currentItem: initialCurrent } = initialConfig;

  const [{ currentItem, items }, dispatch] = useReducer(reducer, {
    currentItem:
      initialCurrent ||
      getDefaultBoxShadow(initialItems ? initialItems.length + 1 : 1),
    items: initialItems || []
  });

  const updateCurrentItem = (
    key: string,
    value: number | boolean | string
  ): void => {
    dispatch({ type: "UPDATE_CURRENT_ITEM", key, value });
  };

  const addNewItem = (): void => {
    dispatch({ type: "ADD_NEW_ITEM" });
  };

  const updateItemPosition = (x: number, y: number, id: number) => {
    dispatch({ type: "UPDATE_ITEM_POSITION", x, y, id });
  };

  const updateActiveItem = (id: number) => {
    dispatch({ type: "UPDATE_ACTIVE_ITEM", id });
  };

  const duplicateItem = () => {
    dispatch({ type: "DUPLICATE_ITEM", id: nanoid() });
  };

  const resetItems = () => {
    dispatch({ type: "RESET_ITEMS" });
  };

  return {
    updateCurrentItem,
    currentItem,
    addNewItem,
    items,
    updateItemPosition,
    updateActiveItem,
    resetItems,
    duplicateItem
  };
};

export default useBoxShadows;
