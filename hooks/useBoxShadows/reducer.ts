import { getDefaultBoxShadow } from "./useBoxShadows";

export const reducer = (items, action) => {
  switch (action.type) {
    case "UPDATE_CURRENT_ITEM":
      return items.map(item =>
        item.active
          ? {
              ...item,
              [action.key]: action.value
            }
          : item
      );

    case "ADD_NEW_ITEM":
      return [
        getDefaultBoxShadow(items.length + 1),
        ...items.map(item =>
          item.active
            ? {
                ...item,
                active: false
              }
            : item
        )
      ];

    case "UPDATE_ITEM_POSITION":
      return items.map(item =>
        item.id === action.id ? { ...item, x: action.x, y: action.y } : item
      );

    case "UPDATE_ACTIVE_ITEM":
      return items.map(item => {
        if (item.id === action.id) {
          return {
            ...item,
            active: true
          };
        }

        if (item.active) {
          return {
            ...item,
            active: false
          };
        }

        return item;
      });

    case "DUPLICATE_ITEM":
      const activeItem = items.filter(item => item.active)[0];
      return [
        { ...activeItem, active: true, id: action.id },
        ...items.map(item => (item.active ? { ...item, active: false } : item))
      ];

    case "RESET_ITEMS":
      return [getDefaultBoxShadow(1)];

    default:
      return items;
  }
};
