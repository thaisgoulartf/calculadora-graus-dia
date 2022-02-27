import { useContext } from "react";
import { CulturaContext } from "../contexts/CulturaContext";

export function useCulturaContext() {
  return useContext(CulturaContext);
}
