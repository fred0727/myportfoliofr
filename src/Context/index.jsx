import { createContext, useState } from "react";

export const NavigatePagesContext = createContext();

export const NavigatePagesProvider = ({ children }) => {
  const [isPageProject, setIsPageProject] = useState(false);

  return (
    <NavigatePagesContext.Provider
      value={{
        isPageProject,
        setIsPageProject,
      }}
    >
      {children}
    </NavigatePagesContext.Provider>
  );
};
