import { useState } from "react";

export default function useToggleNav(array: any[]) {
  const [items, setItems] = useState(array);

  const toggleNav = (id: number, parentId?: number) => {
    setItems((prevItems) =>
      prevItems.map((item) => {
        if (parentId) {
          if (item.id === parentId) {
            return {
              ...item,
              month: item.month.map((m: any) =>
                m.id === id
                  ? { ...m, isActive: true }
                  : { ...m, isActive: false }
              ),
            };
          }
        } else {
          return {
            ...item,
            isActive: item.id === id,
          };
        }
        return item;
      })
    );
  };

  return { items, toggleNav };
}
