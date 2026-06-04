import { DataContext } from "@/DataContext";
import { useContext } from "react";

export default function useDataContext() {
  const context = useContext(DataContext);

  if (!context) {
    throw new Error(
      "useDataContext() must be used inside a DataContext.Provider"
    );
  }

  return context;
}