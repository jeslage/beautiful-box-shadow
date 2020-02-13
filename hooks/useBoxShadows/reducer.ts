import { getDefaultBoxShadow } from "./useBoxShadows";

export const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_CURRENT_ITEM":
      return {
        ...state,
        currentItem: {
          ...state.currentItem,
          [action.key]: action.value
        }
      };

    case "ADD_NEW_ITEM":
      return {
        ...state,
        items: [...state.items, state.currentItem],
        currentItem: getDefaultBoxShadow(state.items.length + 2)
      };

    case "UPDATE_ITEM_POSITION":
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.id ? { ...item, x: action.x, y: action.y } : item
        )
      };

    case "UPDATE_ACTIVE_ITEM":
      return {
        ...state,
        items: [
          ...state.items.filter(item => item.id !== action.id),
          state.currentItem
        ],
        currentItem: state.items.filter(item => item.id === action.id)[0]
      };

    case "DUPLICATE_ITEM":
      return {
        ...state,
        items: [...state.items, state.currentItem],
        currentItem: { ...state.currentItem, id: action.id }
      };

    case "RESET_ITEMS":
      return {
        items: [],
        currentItem: getDefaultBoxShadow(1)
      };

    default:
      return state;
  }
};
