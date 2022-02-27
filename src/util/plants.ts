export type Plant = {
  id: string;
  basalTemp: number;
  thermalSum: number;
};

export enum PlantsEnum {
  MilhoK9300,
  MilhoK7400,
  MilhoK9105,
  MilhoK7500,
}

export const plants: Record<PlantsEnum, Plant> = {
  [PlantsEnum.MilhoK9300]: {
    id: "Milho K9300 PRO3",
    basalTemp: 10,
    thermalSum: 726,
  },
  [PlantsEnum.MilhoK7400]: {
    id: "Milho K7400 VIP3",
    basalTemp: 10,
    thermalSum: 790,
  },
  [PlantsEnum.MilhoK9105]: {
    id: "Milho K9105 VIP3",
    basalTemp: 10,
    thermalSum: 810,
  },
  [PlantsEnum.MilhoK7500]: {
    id: "Milho K7500 VIP3",
    basalTemp: 10,
    thermalSum: 820,
  },
};
