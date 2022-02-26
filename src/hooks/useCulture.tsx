import { useContext } from "react";
import { CulturaContext } from "../contexts/CulturaContext";

export function useCultura() {
  return useContext(CulturaContext);
}
