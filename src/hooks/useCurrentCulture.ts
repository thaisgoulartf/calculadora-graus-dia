import { useContext } from "react";
import { CurrentCultureContext } from "../contexts/CurrentCultureContext";

export function useCurrentCulture() {
  return useContext(CurrentCultureContext);
}
