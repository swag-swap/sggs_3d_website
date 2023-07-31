import { createContext, useContext, useState } from "react";

const Context = createContext();

export const PlayProvider = ({ children }) => {
  const [page, setPage] = useState(false);
  const [id, setId] = useState(1);

  return (
    <Context.Provider
      value={{
        page,
        setPage, 
        id,
        setId
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const usePlay = () => {
  const context = useContext(Context);

  if (context === undefined) {
    throw new Error("usePlay must be used within a PlayProvider");
  }

  return context;
};