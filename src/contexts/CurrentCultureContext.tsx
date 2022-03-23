import { createContext, ReactNode, useState } from "react";
import { Culture } from "./CultureContext";

type CurrentCultureContextType = {
  currentCulture: Culture | undefined;
  checkCurrentCultureRemoved: (cultureId: string) => boolean;
  updateCurrentCulture: (culture: Culture) => void;
};

type CurrentCultureContextProviderProps = {
  children: ReactNode;
};

export const CurrentCultureContext = createContext(
  {} as CurrentCultureContextType
);

export function CurrentCultureContextProvider(
  props: CurrentCultureContextProviderProps
) {
  const [currentCulture, setCurrentCulture] = useState<Culture>();

  function checkCurrentCultureRemoved(cultureId: string) {
    return currentCulture?.id === cultureId;
  }

  function updateCurrentCulture(culture: Culture) {
    setCurrentCulture(culture);
  }

  return (
    <CurrentCultureContext.Provider
      value={{
        currentCulture,
        checkCurrentCultureRemoved,
        updateCurrentCulture,
      }}
    >
      {props.children}
    </CurrentCultureContext.Provider>
  );
}
