import { useContext } from "react";
import { CurrentCulturaContext } from "../contexts/CurrentCulturaContext";

export function useCurrentCultura() {
  return useContext(CurrentCulturaContext);
}
