import React, { createContext, useContext } from "react";
import data from "../data.json";

const DataContext = createContext(data);

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
};
