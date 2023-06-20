import { useState } from "react";

export default function useToggleNav(array: any) {
  const [items, setItems] = useState(array);

  const toggleNav = (id: number) => {
    setItems(
      items.map((item: any) => {
        if (item.id === id) {
          return {
            ...item,
            isActive: true,
          };
        }
        return {
          ...item,
          isActive: false,
        };
      })
    );
  };

  return { items, toggleNav };
}
