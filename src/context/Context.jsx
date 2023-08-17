import { createContext, useContext } from "react";

export const DependenciesProvider = createContext();

export const useDependencies = () => useContext(DependenciesProvider);