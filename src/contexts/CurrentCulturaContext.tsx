import { createContext, ReactNode, useState } from "react";
import { Cultura } from "./CulturaContext";

type CurrentCulturaContextType = {
  currentCultura: Cultura | undefined;
  checkCurrentCulturaRemoved: (culturaId: string) => boolean;
  updateCurrentCultura: (cultura: Cultura) => void;
};

type CurrentCulturaContextProviderProps = {
  children: ReactNode;
};

export const CurrentCulturaContext = createContext(
  {} as CurrentCulturaContextType
);

export function CurrentCulturaContextProvider(
  props: CurrentCulturaContextProviderProps
) {
  const [currentCultura, setCurrentCultura] = useState<Cultura>();

  function checkCurrentCulturaRemoved(culturaId: string) {
    return currentCultura?.id === culturaId;
  }

  function updateCurrentCultura(cultura: Cultura) {
    setCurrentCultura(cultura);
  }

  return (
    <CurrentCulturaContext.Provider
      value={{
        currentCultura,
        checkCurrentCulturaRemoved,
        updateCurrentCultura,
      }}
    >
      {props.children}
    </CurrentCulturaContext.Provider>
  );
}
