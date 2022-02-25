import { createContext, ReactNode, useState } from "react";
import { auth, database } from "../services/firebase";

export type Cultura = {
  id: string;
  planta: string;
  descricao: string;
  dataInicio: string;
  localizacao: string;
};

type Planta = {
  nome: string;
  tempBasal: number;
  gd: number;
};

type CulturaContextType = {
  culturas: Cultura[] | undefined;
  createCultura: (cultura: Cultura) => Promise<void>;
  removeCultura: (culturaId: string) => Promise<void>;
  updateCultura: (cultura: Cultura) => Promise<void>;
  loadCulturas: (userId: string) => Promise<Cultura[]>;
};

type CulturaContextProviderProps = {
  children: ReactNode;
};

export const CulturaContext = createContext({} as CulturaContextType);

export function CulturaContextProvider(props: CulturaContextProviderProps) {
  const [culturas, setCulturas] = useState<Cultura[]>();

  async function createCultura(cultura: Cultura) {
    var culturasValue = culturas;
    if (!culturasValue) {
      culturasValue = [];
    }
    culturasValue.push(cultura);
    await setCulturas(culturasValue);
    await persistData(culturasValue);
  }

  async function removeCultura(culturaId: string) {
    var indexToRemove = -1;
    if (culturas) {
      culturas.forEach((currentCultura, index) => {
        if (currentCultura.id === culturaId) indexToRemove = index;
      });
      if (indexToRemove > -1) culturas.splice(indexToRemove, 1);
    }
    await setCulturas(culturas);
    await persistData(culturas!);
  }

  async function updateCultura(cultura: Cultura) {
    var culturasValue = culturas;
    if (culturasValue) {
      culturasValue.forEach((currentCultura, index) => {
        if (currentCultura.id === cultura.id) {
          culturasValue![index] = cultura;
        }
      });
    }
    await setCulturas(culturasValue);
    await persistData(culturasValue!);
  }

  async function persistData(culturas: Cultura[]) {
    const usuarioAtual = auth.currentUser?.uid;

    database.ref("users/" + usuarioAtual + "/culturas").set(culturas);
  }

  async function loadCulturas(userId: string) {
    var culturasRef = await database.ref("users/" + userId + "/culturas").get();
    var loadedCulturas = culturasRef.val();
    setCulturas(loadedCulturas);
    return loadedCulturas;
  }

  return (
    <CulturaContext.Provider
      value={{
        culturas,
        createCultura,
        removeCultura,
        updateCultura,
        loadCulturas,
      }}
    >
      {props.children}
    </CulturaContext.Provider>
  );
}
