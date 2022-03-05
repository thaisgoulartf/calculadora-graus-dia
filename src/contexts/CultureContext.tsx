import { createContext, ReactNode, useState } from "react";
import { auth, database } from "../services/firebase";
import { mapCulturesToCulturesToPersist } from "../util/function_utils";
import { GraphData } from "../util/GraphBuilder";
import { Plant } from "../util/plants";

export type Culture = {
  id: string;
  planta: Plant;
  description: string;
  startDate: string;
  localization: string;
  graphData?: GraphData;
};

export type CultureToPersist = {
  id: string;
  planta: Plant;
  description: string;
  startDate: string;
  localization: string;
};

type CultureContextType = {
  cultures: Culture[] | undefined;
  createCulture: (culture: Culture) => Promise<void>;
  removeCulture: (cultureId: string) => Promise<void>;
  updateCulture: (culture: Culture) => Promise<void>;
  loadCultures: (userId: string) => Promise<Culture[]>;
};

type CultureContextProviderProps = {
  children: ReactNode;
};

export const CultureContext = createContext({} as CultureContextType);

export function CultureContextProvider(props: CultureContextProviderProps) {
  const [cultures, setCultures] = useState<Culture[]>();

  async function createCulture(culture: Culture) {
    var culturesValue = cultures;
    if (!culturesValue) {
      culturesValue = [];
    }
    culturesValue.push(culture);
    await setCultures(culturesValue);
    await persistData(culturesValue);
  }

  async function removeCulture(cultureId: string) {
    var indexToRemove = -1;
    if (cultures) {
      cultures.forEach((currentCulture, index) => {
        if (currentCulture.id === cultureId) indexToRemove = index;
      });
      if (indexToRemove > -1) cultures.splice(indexToRemove, 1);
    }
    await setCultures(cultures);
    await persistData(cultures!);
  }

  async function updateCulture(culture: Culture) {
    var culturesValue = cultures;
    if (culturesValue) {
      culturesValue.forEach((currentCulture, index) => {
        if (currentCulture.id === culture.id) {
          culturesValue![index] = culture;
        }
      });
    }
    await setCultures(culturesValue);
    await persistData(culturesValue!);
  }

  async function persistData(cultures: Culture[]) {
    const usuarioAtual = auth.currentUser?.uid;
    const culturesToPersist = mapCulturesToCulturesToPersist(cultures);

    database.ref("users/" + usuarioAtual + "/culturas").set(culturesToPersist);
  }

  async function loadCultures(userId: string) {
    var culturesRef = await database.ref("users/" + userId + "/culturas").get();
    var loadedCultures = culturesRef.val();
    setCultures(loadedCultures);
    return loadedCultures;
  }

  return (
    <CultureContext.Provider
      value={{
        cultures,
        createCulture,
        removeCulture,
        updateCulture,
        loadCultures,
      }}
    >
      {props.children}
    </CultureContext.Provider>
  );
}
