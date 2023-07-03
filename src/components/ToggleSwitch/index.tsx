import { ChangeEvent, useState } from "react";
import { useThemeStore } from "@/stores/themeStore";
import * as S from "./styles";

export default function ToggleSwitch() {
  const toggleTheme = useThemeStore((state) => state.toggleTheme);
  const [checked, setChecked] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
    toggleTheme();
  };

  return (
    <S.Label>
      <S.Input checked={checked} type="checkbox" onChange={handleChange} />
      <S.Switch />
    </S.Label>
  );
}
