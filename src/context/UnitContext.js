import { createContext, useContext } from "react";

export const UnitContext = createContext({ unit: "C", setUnit: () => {} });

export const useUnit = () => useContext(UnitContext);
