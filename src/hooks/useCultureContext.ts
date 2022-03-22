import { useContext } from "react";
import { CultureContext } from "../contexts/CultureContext";

export function useCultureContext() {
  return useContext(CultureContext);
}
